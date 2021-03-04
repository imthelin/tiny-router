export class HTML5History extends History {
  constructor(router, base) {
    super(router, base)
    this.base = base
    /**
     * 原理还是跟 hash 实现一样
     * 通过监听 popstate 事件
     * 匹配路由，然后更新页面 DOM
     */
    window.addEventListener('popstate', e => {
      const current = this.current

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      const location = getLocation(this.base)
      if (this.current === START && location === initLocation) {
        return
      }

      this.transitionTo(location, route => {
        if (supportsScroll) {
          handleScroll(router, route, current, true)
        }
      })
    })
  }

  go(n) {
    window.history.go(n)
  }

  push(location, onComplete, onAbort) {
    const { current: fromRoute } = this
    this.transitionTo(
      location,
      route => {
        // 使用 pushState 更新 url，不会导致浏览器发送请求，从而不会刷新页面
        pushState(cleanPath(this.base + route.fullPath))
        onComplete && onComplete(route)
      },
      onAbort
    )
  }

  replace(location, onComplete, onAbort) {
    const { current: fromRoute } = this
    this.transitionTo(
      location,
      route => {
        // replaceState 跟 pushState 的区别在于，不会记录到历史栈
        replaceState(cleanPath(this.base + route.fullPath))
        onComplete && onComplete(route)
      },
      onAbort
    )
  }
}
