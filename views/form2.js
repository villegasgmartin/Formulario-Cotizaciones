    {{!-- <div id="planesDiv">
            {{#if mostrarBoton}}
            
    <div class="consulta-container">
        <button class="mas-info-btn" onclick="window.location.href = `https://wa.me/+5493413151350?text=Buenas%20tardes,%20quisiera%20averiguar%20sobre%20la%20cobertura`">Consultar Valores</button>
    </div>
{{else}}
 {{#if VerMas}}
         <img src="http://tuplanb.com.ar/wp-content/uploads/2025/09/flecha-hacia-abajo_vchmc9.png" alt="flecha" style="width: 60px; height:auto; object-fit:contain; margin:auto">
        {{/if}}
    <div id="planesDiv">
       
        {{#each CoberturasPropuestas}}

            <div class="cobertura">
                
                <h2 class="nombre-comp">{{plan}}</h2>
                <img class="foto-comp" src="" alt="">
                <div>
                    
                    <p class="plan">{{NombrePlan}}</p>
                    {{!-- datos ocultos --}}
                    <p style="display: none;" class="edad">{{edad}}</p>
                    <p style="display: none;"  class="tipo">{{tipo}}</p>
                    <p style="display: none;"  class="sueldo">{{sueldo}}</p>   
                    <p style="display: none;"  class="monutributo">{{monutributo}}</p>
                    <p style="display: none;"  class="localidad">{{localidad}}</p>   
                    <p style="display: none;"  class="edad-pareja">{{edadPareja}}</p>
                    <p style="display: none;"  class="tributo">{{tributo}}</p>
                    <p style="display: none;"  class="hijos">{{hijos}}</p>



                    <p>{{{descripcion}}}</p>
                    <p class="costo">{{valor}}</p>
                       <!-- Checkbox para comparación -->
                    <div class="check-div"> 
                        <input type="checkbox" class="comparar-checkbox" value="{{NombrePlan}}" onchange="handleCompareCheckbox(this)">
                        <label>Comparar</label>
                    </div>

                </div>
                    
                    <button class="mas-info-btn" onclick="window.location.href= {{ws}}">Más Info</button>   
                
            </div>
        {{/each}}
      
    </div>
     {{#if VerMas}}
          <!-- Botón para comparar -->
          <div class="comparativa-contenedor">
        <div style="text-align: center; margin-top: 20px;">
                            <button id="compararBtn" disabled>Comparar</button>
                        </div>

                        <!-- Contenedor para mostrar la tabla de comparación -->
                        <div id="comparativa"></div> 
          </div>
                
      {{/if}}
{{/if}}
    </div> --}}