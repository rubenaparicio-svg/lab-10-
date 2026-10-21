async function mostrarPosts() {
    const lista = document.querySelector("#posts");
    try {
      // 1. Petición a la API con los posts del usuario 1
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
      
      // Verificación de respuesta
      if (!res.ok) throw new Error("No se pudo cargar la información");
      
      // 2. Convertir respuesta a JSON
      const posts = await res.json();
      
      // 3. Renderizar los 10 títulos en la lista ordenada (<ol>)
      lista.innerHTML = posts
        .map(post => `<li>${post.title}</li>`)
        .join("");
  
    } catch (error) {
      // 4. Captura de errores
      lista.innerHTML = "<li>No se pudo cargar la información</li>";
    }
  }
  
  mostrarPosts();