const BotonSuma= document.getElementById("suma");
const BotonResta = document.getElementById("resta");
const BotonMultiplicar = document.getElementById("multiplicacion");
const BotonDividir = document.getElementById("dividir");



BotonSuma.addEventListener(
    'click',
    async(event)=>{
        event.preventDefault();
        console.log(event);
        const numero_1= parseFloat(document.getElementById("num1").value);
        const numero_2= parseFloat(document.getElementById("num2").value);
        console.log(numero_1,numero_2);
    
        const respuesta= await fetch(
            'http://localhost:3001/api/sumar',
            {
                "method":"POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body": JSON.stringify({numero_1,numero_2})
            }
        );
          const dato =await respuesta.json("resultado");

            const div_resultado=document.getElementById("resultado");
            div_resultado.innerHTML=dato;
    });

    BotonResta.addEventListener(
        'click',
        async(event)=>{
            event.preventDefault();
            console.log(event);
            const numero_1= parseFloat(document.getElementById("num1").value);
            const numero_2= parseFloat(document.getElementById("num2").value);
            console.log(numero_1,numero_2);
        
            const respuesta= await fetch(
                'http://localhost:3001/api/restar',
                {
                    "method":"POST",
                    "headers":{
                        "Content-Type":"application/json"
                    },
                    "body": JSON.stringify({numero_1,numero_2})
                }
            );
              const dato =await respuesta.json("resultado");
    
                const div_resultado=document.getElementById("resultado");
                div_resultado.innerHTML=dato;
        });

        BotonDividir.addEventListener(
            'click',
            async(event)=>{
                event.preventDefault();
                console.log(event);
                const numero_1= parseFloat(document.getElementById("num1").value);
                const numero_2= parseFloat(document.getElementById("num2").value);
                console.log(numero_1,numero_2);
            
                const respuesta= await fetch(
                    'http://localhost:3001/api/dividir',
                    {
                        "method":"POST",
                        "headers":{
                            "Content-Type":"application/json"
                        },
                        "body": JSON.stringify({numero_1,numero_2})
                    }
                );
                  const dato =await respuesta.json("resultado");
        
                    const div_resultado=document.getElementById("resultado");
                    div_resultado.innerHTML=dato;
            });

            BotonMultiplicar.addEventListener(
                'click',
                async(event)=>{
                    event.preventDefault();
                    console.log(event);
                    const numero_1= parseFloat(document.getElementById("num1").value);
                    const numero_2= parseFloat(document.getElementById("num2").value);
                    console.log(numero_1,numero_2);
                
                    const respuesta= await fetch(
                        'http://localhost:3001/api/multiplicacion',
                        {
                            "method":"POST",
                            "headers":{
                                "Content-Type":"application/json"
                            },
                            "body": JSON.stringify({numero_1,numero_2})
                        }
                    );
                      const dato =await respuesta.json("resultado");
            
                        const div_resultado=document.getElementById("resultado");
                        div_resultado.innerHTML=dato;
                });