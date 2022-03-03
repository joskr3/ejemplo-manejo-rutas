import React from 'react'

const Formulario = () => {


    const [ datos, setDatos ] = React.useState( {
        nombre: '',
        apellido: '',
    } )


    const handleChange = ( e ) => {
        setDatos( {
            ...datos,
            [ e.target.name ]: e.target.value
        } )
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        console.log( datos )
    }


    // const handleChangeInput1 = ( e ) => {

    // }



    return (
        <>

            <h1>Mi formulario</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombres :</label>
                    <input type="text" name="nombre" placeholder='Ej. Juan ' onChange={handleChange} />
                </div>

                <div>
                    <label>Apellidos:</label>
                    <input type="text" name="apellido" placeholder='Ej. Perez ' onChange={handleChange} />
                </div>

                <button type='submit'>
                    Enviar
                </button>

            </form>


        </>
    )
}

export default Formulario