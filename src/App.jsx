import { useState } from 'react'
import './App.css'

/* ============================================================
   PROYECTO INTEGRADOR — Práctica de Git (merge conflicts)
   ============================================================
   REGLA: Todo el código vive en ESTE archivo (App.jsx).
   ============================================================ */

function App() {
  /* --- ESTADO GLOBAL DEL SISTEMA --- */
  const [sistemaActivo, setSistemaActivo] = useState(true)
  const [alertaVisible, setAlertaVisible] = useState(true)

  /* --- ESTADOS SECCIÓN 1: LOGIN --- */
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loginMensaje, setLoginMensaje] = useState('')

  /* --- ESTADOS SECCIÓN 2: REGISTRO --- */
  const [regNombre, setRegNombre] = useState('')
  const [regEmail, setRegEmail] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const [regMensaje, setRegMensaje] = useState('')

  /* --- ESTADOS SECCIÓN 3: PERFIL --- */
  const [perfilNombre, setPerfilNombre] = useState('Usuario Demo')
  const [perfilBio, setPerfilBio] = useState('Especialista Frontend & DevOps')
  const [perfilEditando, setPerfilEditando] = useState(false)
  const [perfilMensaje, setPerfilMensaje] = useState('')

  /* --- HANDLERS SECCIÓN 1: LOGIN --- */
  const handleLogin = (e) => {
    e.preventDefault()
    if (!loginEmail || !loginPassword) {
      setLoginMensaje('⚠️ Completa todos los campos.')
      return
    }
    setLoginMensaje('🚀 Acceso concedido vía portal Jose.')
    setLoginEmail('')
    setLoginPassword('')
  }

  /* --- HANDLERS SECCIÓN 2: REGISTRO --- */
  const handleRegistro = (e) => {
    e.preventDefault()
    if (!regNombre || !regEmail || !regPassword) {
      setRegMensaje('⚠️ Todos los campos son obligatorios.')
      return
    }
    if (regPassword.length < 8) {
      setRegMensaje('⚠️ La contraseña exige mínimo 8 caracteres.')
      return
    }
    setRegMensaje(`✅ Usuario "${regNombre}" registrado correctamente.`)
    setRegNombre('')
    setRegEmail('')
    setRegPassword('')
  }

  /* --- HANDLERS SECCIÓN 3: PERFIL --- */
  const handleGuardarPerfil = () => {
    if (!perfilNombre.trim()) {
      setPerfilMensaje('⚠️ El nombre no puede estar vacío.')
      return
    }
    setPerfilEditando(false)
    setPerfilMensaje('✅ Perfil actualizado correctamente.')
  }

  return (
    <div className="app-container">

      {/* --- BANNER DE ALERTA (hotfix / bugfix) --- */}
      {alertaVisible && (
        <div className="alerta-banner">
          <div className="alerta-contenido">
            <span className="alerta-icono">🔧</span>
            <p className="alerta-texto">
              <strong>ALERTA DE SEGURIDAD (HOTFIX):</strong> Se aplicó un parche urgente en los certificados TLS del sistema.
            </p>
            <button
              className="alerta-cerrar"
              onClick={() => setAlertaVisible(false)}
              aria-label="Cerrar alerta"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* --- HEADER PRINCIPAL --- */}
      <header className="header-principal">
        <div className="header-contenido">
          <div className="header-logo">
            <span className="header-logo-icono">◆</span>
            <h1>Sistema Oficial - Proyecto Integrador</h1>
          </div>
          <div className="header-estado">
            <span className={`estado-indicador ${sistemaActivo ? 'activo' : 'inactivo'}`} />
            <span className="estado-texto">
              {sistemaActivo ? 'Sistema Operativo' : 'Sistema Inactivo'}
            </span>
            <button
              className="btn-toggle-sistema"
              onClick={() => setSistemaActivo(!sistemaActivo)}
            >
              {sistemaActivo ? 'Desactivar' : 'Activar'}
            </button>
          </div>
        </div>
      </header>

      {/* --- CONTENEDOR PRINCIPAL CON LAS 3 SECCIONES --- */}
      <main className="main-contenedor">
        <div className="secciones-grid">

          {/* --- SECCIÓN 1: LOGIN --- */}
          <section className="seccion-card" id="seccion-login">
            <div className="seccion-header">
              <span className="seccion-numero">01</span>
              <h2 className="seccion-titulo">Iniciar Sesión</h2>
            </div>
            <p className="seccion-descripcion">
              Accede a tu cuenta con tus credenciales registradas.
            </p>
            <form className="formulario" onSubmit={handleLogin}>
              <div className="campo-grupo">
                <label className="campo-label" htmlFor="login-email">
                  Correo electrónico
                </label>
                <input
                  id="login-email"
                  className="campo-input"
                  type="email"
                  placeholder="usuario@correo.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div className="campo-grupo">
                <label className="campo-label" htmlFor="login-password">
                  Contraseña
                </label>
                <input
                  id="login-password"
                  className="campo-input"
                  type="password"
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              <button className="btn-primario" type="submit">
                Iniciar Sesión
              </button>
            </form>
            {loginMensaje && (
              <p className="mensaje-feedback">{loginMensaje}</p>
            )}
          </section>

          {/* --- SECCIÓN 2: REGISTRO --- */}
          <section className="seccion-card" id="seccion-registro">
            <div className="seccion-header">
              <span className="seccion-numero">02</span>
              <h2 className="seccion-titulo">Crear Cuenta</h2>
            </div>
            <p className="seccion-descripcion">
              Regístrate para obtener acceso al sistema integrador.
            </p>
            <form className="formulario" onSubmit={handleRegistro}>
              <div className="campo-grupo">
                <label className="campo-label" htmlFor="reg-nombre">
                  Nombre completo
                </label>
                <input
                  id="reg-nombre"
                  className="campo-input"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={regNombre}
                  onChange={(e) => setRegNombre(e.target.value)}
                />
              </div>
              <div className="campo-grupo">
                <label className="campo-label" htmlFor="reg-email">
                  Correo electrónico
                </label>
                <input
                  id="reg-email"
                  className="campo-input"
                  type="email"
                  placeholder="usuario@correo.com"
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                />
              </div>
              <div className="campo-grupo">
                <label className="campo-label" htmlFor="reg-password">
                  Contraseña
                </label>
                <input
                  id="reg-password"
                  className="campo-input"
                  type="password"
                  placeholder="Mínimo 8 caracteres"
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                />
              </div>
              <button className="btn-primario" type="submit">
                Confirmar Registro
              </button>
            </form>
            {regMensaje && (
              <p className="mensaje-feedback">{regMensaje}</p>
            )}
          </section>

          {/* --- SECCIÓN 3: PERFIL --- */}
          <section className="seccion-card" id="seccion-perfil">
            <div className="seccion-header">
              <span className="seccion-numero">03</span>
              <h2 className="seccion-titulo">Mi Perfil</h2>
            </div>
            <p className="seccion-descripcion">
              Visualiza y edita la información de tu perfil de usuario.
            </p>
            <div className="perfil-contenido">
              <div className="perfil-avatar">
                <span className="avatar-placeholder">
                  {perfilNombre.charAt(0).toUpperCase()}
                </span>
              </div>
              {perfilEditando ? (
                <div className="formulario">
                  <div className="campo-grupo">
                    <label className="campo-label" htmlFor="perfil-nombre">
                      Nombre
                    </label>
                    <input
                      id="perfil-nombre"
                      className="campo-input"
                      type="text"
                      value={perfilNombre}
                      onChange={(e) => setPerfilNombre(e.target.value)}
                    />
                  </div>
                  <div className="campo-grupo">
                    <label className="campo-label" htmlFor="perfil-bio">
                      Biografía
                    </label>
                    <textarea
                      id="perfil-bio"
                      className="campo-input campo-textarea"
                      value={perfilBio}
                      onChange={(e) => setPerfilBio(e.target.value)}
                      rows={3}
                    />
                  </div>
                  <div className="perfil-acciones">
                    <button
                      className="btn-primario"
                      type="button"
                      onClick={handleGuardarPerfil}
                    >
                      Guardar
                    </button>
                    <button
                      className="btn-secundario"
                      type="button"
                      onClick={() => setPerfilEditando(false)}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <div className="perfil-info">
                  <h3 className="perfil-nombre">{perfilNombre}</h3>
                  <p className="perfil-bio">{perfilBio}</p>
                  <button
                    className="btn-primario"
                    type="button"
                    onClick={() => {
                      setPerfilEditando(true)
                      setPerfilMensaje('')
                    }}
                  >
                    Actualizar Perfil (Jose)
                  </button>
                </div>
              )}
            </div>
            {perfilMensaje && (
              <p className="mensaje-feedback">{perfilMensaje}</p>
            )}
          </section>

        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="footer-principal">
        <div className="footer-contenido">
          <p className="footer-texto">
            © 2026 SucrExpress — Módulo DevOps y Deploy: Marcos
          </p>
          <div className="footer-estado">
            <span className={`estado-indicador estado-small ${sistemaActivo ? 'activo' : 'inactivo'}`} />
            <span className="footer-version">
              Estado: {sistemaActivo ? 'Operativo' : 'Inactivo'} · v1.0.1-patch
            </span>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App