const emailDesenvolvedor = "tassioleno@gmail.com"

// muito útil para debuggar código
console.log("Email do desenvolvedor: " + emailDesenvolvedor)

function acessarUsuario(){
    const login = document.getElementById('loginUsuario').value
    const senha = document.getElementById('senhaUsuario').value
    
    const usuarioLogado = document.getElementById('usuarioLogado')

    document.getElementById('frmLogarUsuario').style.visibility = "hidden";
    document.getElementById('frmDeslogarUsuario').style.visibility = "visible";
    
    usuarioLogado.innerHTML = "Seja bem vindo, " + login
}

function deslogarUsuario(){
    document.getElementById('frmLogarUsuario').style.visibility = "visible";
    document.getElementById('frmDeslogarUsuario').style.visibility = "hidden";
    document.getElementById('loginUsuario').value = ""
    document.getElementById('senhaUsuario').value = ""
    
}