<script lang="ts">
  async function getHomeRoute() {
    const response=await fetch("https://localhost:8000",{
      method: "get"
    })
    const data = await response.text()
    return data
  }

  let display = "";
  async function handletClick() {
    async function handletClick()


  }
 
</script>

<main>
  
</main>

