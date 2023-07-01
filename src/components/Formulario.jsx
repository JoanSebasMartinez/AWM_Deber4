import { useState } from 'react';
const Formulario = (props) => {
    const imglogo = 'https://logowik.com/content/uploads/images/spotify-black1673.jpg'

    const {state, setState} = props;
    const [fnTitle, setFnTitle] =  useState("");
    const [lnTitle, setLnTitle] =  useState("");
    const [eTitle, setETitle] =  useState("");
    const [pTitle, setPTitle] =  useState("");
    const [cPTitle, setCpTitle] =  useState("");

    const handleFirstName = (e)=>{
        setState({...state, 'firstName': e.target.value});
        if (state.firstName.length < 1){
            setFnTitle('First name must have at least two characters!');
        }else{
            setFnTitle("");
        }
    }
    const handleEmail = (e)=>{
        setState({...state, 'email': e.target.value});
        if (state.email.length < 1){
            setETitle('Email must have at least two characters!');
        }else{
            setETitle("");
        }
    }

    const handlePassword = (e)=>{
        setState({...state, 'password': e.target.value});
        if (state.password.length < 7){
            setPTitle('Es necesario que coloques tu correo electrónico.');
        }else{
            setPTitle("");
        }
    }
  

    return(
        <form>
            <div className='Registro'>
                <div className='ContLogo'>
                    <img className='ImgLogo' src='https://logowik.com/content/uploads/images/spotify-black1673.jpg' alt="Logo Spotify" />
                    <h2>Regístrate gratis para continuar</h2>
                    <div className='divLogin'>
                   <button className='btnFb'> <img className='ImgLoginF' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Facebook_Circle.svg/120px-Facebook_Circle.svg.png" alt="Login Facebook" />   Registrarte con Facebook  </button>
                   
                    </div>
                    <div className='divLogin'>
                    <button className='btnGoogle'><img className='ImgLoginG' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="Login Google" />   Registrarte con Google  </button>
                    </div>
                    <span className='divfrm'>_________________  o   ________________</span>
                    
            </div>
                    <div className="input">
                        <div className='divizq'>¿Cuál es tu correo electrónico? </div><input className="txtingreso" type="text" name="email" placeholder='Pon tu correo electrónico' size={30} onChange={handleEmail}/>
                        {
                            <p style={{color:'red'}}> {eTitle}</p>
                            }
                    </div>
                    <div className="input">
                    <div className='divizq'>Crea una contraseña </div>
                        <input className="txtingreso" type="password" name="password" size={30} placeholder='Crea una contraseña.' onChange={handlePassword}/>
                        {
                    <p style={{color:'red'}}> {pTitle}</p>
                    }
                    </div>
                    <div className="input">
                    <div className='divizq'>¿Cómo quieres que te llamemos? </div>
                        <input className="txtingreso" type="text" name="firstName" size={30} placeholder='Pon un nombre de perfil' onChange={handleFirstName}/>
                        {
                            <p style={{color:'red'}}> {fnTitle}</p>
                            }
                            </div>
                            <div className='divizq'>¿Cuál es tu fecha de nacimiento? </div>
                    <div className='input'>
                        <div className='fecha'>
                        <div className='Dia'>
                        <div className='divizq'>Dia </div>
                                <input type="text" name="btnDia" id="btnDia" placeholder='DD' />
                            </div>
                            <div className='Mes'>
                            <div className='divizq'>Mes </div>
                                <input type="month" name="btnMes" id="btnMes" placeholder='Mes' />
                            </div>

                            <div className='Anio'>
                            <div className='divizq'>Año </div>
                                <input type="text" name='btnAnio' id='btnAnio' placeholder='AAAA' />
                            </div>
                        </div>
                        <div className='input'>
                        <div className='divizq'>¿Cuál es tu género? </div>
                            <input type="radio"  name="btnH" id="rbHombre" /><label htmlFor="rbHombre" className= "rbutton">Hombre</label>
                            <input  type="radio" name="btnM" id="rbMujer" /><label htmlFor="rbMujer" className= "rbutton">Mujer</label>
                            <input type="radio" name="btnN" id="rbNoBin" /><label htmlFor="rbNoBin" className= "rbutton">No binario</label>
                            <input type="radio" name="btnO" id="rbOtro" /><label htmlFor="rbOtro" className= "rbutton">Otro</label>
                            <input type="radio" name="btnP" id="rbPref" /><label htmlFor="rbPref" className= "rbutton">Prefiero no decirlo</label>
                        </div>
                        <div className='divizq'>
                            <input type="checkbox" name="chCompartir" id="chCompartir" /><span>No quiero recibir mensajes de marketing de Spotify</span>
                        </div>
                        <div className='divizq'>
                            <input type="checkbox" name="chCompartir" id="chCompartir" /><span>Compartir mis datos de registro con los proveedores de contenidos de Spotify para fines de marketing.</span>
                        </div>
                        <div className='divc'>
                            <p>Al hacer clic en Registrarte, aceptas los <span className='terminos'>Términos y condiciones de uso de Spotify.</span></p>
                            <p>Para obtener más información acerca de cómo Spotify recopila, utiliza, comparte y protege tus datos personales, consulta la <span className='terminos'>Política de privacidad de Spotify.</span></p>
                        </div>

                    </div>

                
            </div>
            
            <input className= "btnRegistrar" type="submit" value="Registrar"/>
            <div className='input'>
                <p>¿Ya tienes cuenta? <a href="https://www.epn.edu.ec" className='terminos'>Inicia sesión</a></p>
            </div>
        </form>
    );
}

export default Formulario;