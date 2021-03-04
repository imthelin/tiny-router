/**
 * 添加 url hash 变化的监听器
 */
const setupListeners = function () {
  // const router = this.router
  /**
   * 每当 hash 变化时就解析路径
   * 匹配路由
   */
  window.addEventListener('hashchange', () => {
    console.log('change hash');
    // const current = this.current
    // /**
    //  * transitionTo:
    //  * 匹配路由
    //  * 并通过路由配置，把新的页面 render 到 ui-view 的节点
    //  */
    // this.transitionTo(getHash(), route => {
    //   replaceHash(route.fullPath)
    // })
  })
}

// const getHash = function () { }

export default setupListeners
