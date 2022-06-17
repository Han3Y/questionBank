const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    meta: { title: 'menu.home' },
    // redirect: '/dashboard/workplace',
    redirect: '/admin',
    children: [
      // 管理员
      {
        path: '/admin',
        name: 'admin',
        redirect: '/list/user',
        meta: { title: '管理员操作', icon: 'check-circle-o', permission: ['admin'] },
        children: [
          {
            path: '/list/user',
            name: 'UserList',
            redirect: '/list/user-list',
            meta: { title:'账号管理', permission: ['admin'] },
            hideChildrenInMenu:true,
            children:[
              {
                path: '/list/user-list/tab',
                hidden:true,
                name: 'tab',
                meta: { title:'tab', permission: ['admin'] }
              },{
                path: '/list/user-list',
                name: 'UserList',
                hidden:true,
                // component: RouteView,
                meta: { title:'账号管理', permission: ['admin'] },
              }
            ]
          },
          {
            path: '/list/tab',
            hidden:true,
            name: 'tab',
            meta: { title:'Tab2', permission: ['admin'] }
          },
          {
            path: '/list/device-list',
            name: 'Devicelist',
            meta: { title: '装置管理', permission: ['admin'] }
          },
          // {
          //   path: '/list/syc-config',
          //   name: 'SycConfig',
          //   component: () => import('@/views/newp/SycConfig'),
          //   meta: { title: '系统设置', permission: ['admin'] }
          // }
        ]
      },
      // 操作员
      {
        path: '/admin',
        name: 'admin',
        component: '',
        redirect: '/list/user-list',
        meta: { title: '安全策略', icon: 'check-circle-o', permission: ['operator'] },
        children: [
          {
            path: '/list/user-list',
            name: 'UserList',
            meta: { title: '黑名单', permission: ['operator'] }
          },
          {
            path: '/list/device-list',
            name: 'Devicelist',
            meta: { title: '白名单', permission: ['operator'] }
          },
          {
            path: '/list/syc-config',
            name: 'SycConfig',
            meta: { title: 'IP/MAC', permission: ['operator'] }
          }
        ]
      },
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

function getPaths(path){
  function searchItem(item, p){
    p.push({
      path: item.path
    });
    if(item.path === path){
      return true;
    }else if(item.children){
      for(let pathItem of item.children){
        if(searchItem(pathItem, p)){
          return true;
        }
      }
      p.pop();
    }else{
      p.pop();
    }
  }
  let p = [];
  for(let pathItem of asyncRouterMap){
    if(searchItem(pathItem, p)){
      break;
    }
  }
  return p;
}

console.log(JSON.stringify(getPaths('/list/user-list')))
console.log(JSON.stringify(getPaths('/list/syc-config')))

