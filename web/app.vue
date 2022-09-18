<template>
  <div>
    <h1>GraphQL Client Demo</h1>
    <div> {{ data }}</div>
  </div>
</template>

<script lang="ts">
export default {
  setup(){
    const data = ref()

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({query: "{ author(id:1) { lastName firstName id posts { id title votes} } }" })
    })
    .then( r => r.json() )
    .then( _data => {
      data.value = _data.data
    } )
    
    return {
      data
    }
  }
}

</script>