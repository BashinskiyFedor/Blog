<template>
  <div>
    <sidebar>
      <template slot="links">
        <sidebar-item :link="{name: 'Icons', icon: 'ni ni-planet', path: '/icons'}"/>
        <sidebar-item :link="{name: 'Icons', icon: 'ni ni-planet', path: '/icons'}"/>
        <sidebar-item :link="{name: 'Icons', icon: 'ni ni-planet', path: '/icons'}"/>
        <sidebar-item :link="{name: 'Icons', icon: 'ni ni-planet', path: '/icons'}"/>
        <sidebar-item :link="{name: 'Icons', icon: 'ni ni-planet', path: '/icons'}"/>
        <sidebar-item :link="{name: 'Icons', icon: 'ni ni-planet', path: '/icons'}"/>
      </template>
    </sidebar>
    <div class="main-content">
      <dashboard-navbar></dashboard-navbar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>