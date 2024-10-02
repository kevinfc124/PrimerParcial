export function crearPagina(titulo, contenido) {
    return `
  <!DOCTYPE html>
  <html lang="es">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${titulo}</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">          
          <style>
              body {
                  background-color: #f4f4f4;
              }
              header {
                  background: #35424a;
                  color: #ffffff;
                  padding: 20px 0;
              }
          </style>
      </head>
      <body>
          <header class="text-center">
              <h1>${titulo}</h1>
          </header>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container">
                  <a class="navbar-brand" href="/documentos">Documentos</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                          <li class="nav-item">
                              <a class="nav-link" href="/documentos?seccion=Programación">Programación</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="/documentos?seccion=Matemática">Matemática</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="/documentos?seccion=Física">Física</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="/documentos?seccion=Fotografía">Fotografía</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="/documentos?seccion=Diseño">Diseño</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
          <main class="container my-4">
              <h2>Documentos Educativos</h2>
              <div class="row">
                  ${contenido}
              </div>
          </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      </body>
  </html>
  `;
}

export function crearListadoDocumentos(documentos) {
    return documentos.map(documento => `
      <div class="col-md-4">
          <div class="card mb-4">
              <img src="${documento.imagen}" class="card-img-top" alt="Imagen de ${documento.nombre}">
              <div class="card-body">
                  <h5 class="card-title">${documento.nombre}</h5>
                  <p class="card-text">${documento.descripcion}</p>
                  <p class="text-muted">Sección: ${documento.seccion}</p>
                  <a href="${documento.fuente}" class="btn btn-primary">Fuente</a>
              </div>
          </div>
      </div>
  `).join('');
}
