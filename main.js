function generarPDF() {
  // Obtener valores
  var fechaLlegada = document.getElementById("resumenFechaLlegada").textContent;
  var fechaSalida = document.getElementById("resumenFechaSalida").textContent;
  var tipoHabitacion = document.getElementById("resumenTipoHabitacion").textContent;
  var nombre = document.getElementById("resumenNombre").textContent;
  var apellido = document.getElementById("resumenApellido").textContent;
  var email = document.getElementById("resumenEmail").textContent;
  var telefono = document.getElementById("resumenTelefono").textContent;
  
  // crear PDF
  var doc = new jsPDF();
  doc.text("Resumen de Reserva de Hotel", 20, 20);
  doc.text("Fecha de llegada: " + fechaLlegada, 20, 30);
  doc.text("Fecha de salida: " + fechaSalida, 20, 40);
  doc.text("Tipo de habitación: " + tipoHabitacion, 20, 50);
  doc.text("Nombre del huésped: " + nombre, 20, 60);
  doc.text("Apellido del huésped: " + apellido, 20, 70);
  doc.text("Correo electrónico: " + email, 20, 80);
  doc.text("Telefono del huesped: " + telefono, 20, 90)
  doc.save("Resumen de Reserva de Hotel.pdf");
}





document.getElementById("paso2").style.display = "none";
document.getElementById("resumen").style.display = "none";
  function validarPaso1() {
    // Validar campos
    var fechaLlegada = document.getElementById("fechaLlegada").value;
    var fechaSalida = document.getElementById("fechaSalida").value;
    var tipoHabitacion = document.getElementById("tipoHabitacion").value;
    
    
    if (!fechaLlegada || !fechaSalida || !tipoHabitacion) {
      alert("Por favor, complete todos los campos antes de continuar.");
    } else {
      // Guarda valores en variables
      var resumenFechaLlegada = document.getElementById("resumenFechaLlegada");
      var resumenFechaSalida = document.getElementById("resumenFechaSalida");
      var resumenTipoHabitacion = document.getElementById("resumenTipoHabitacion");
      
      
      // Asigna valores a los elementos del resumen
      resumenFechaLlegada.textContent = fechaLlegada;
      resumenFechaSalida.textContent = fechaSalida;
      resumenTipoHabitacion.textContent = tipoHabitacion;
      
      
      // Mostrar siguiente paso
      document.getElementById("paso1").style.display = "none";
      document.getElementById("paso2").style.display = "block";
      document.getElementById("sdf").style.display = "none";
    }
  }
  
  function validarPaso2() {
    // Validación de campos
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    
    if (!nombre || !apellido || !email || !telefono) {
      alert("Por favor, complete todos los campos antes de continuar.");
    } else {
      // Guardar valores en variables
      var resumenNombre = document.getElementById("resumenNombre");
      var resumenApellido = document.getElementById("resumenApellido");
      var resumenEmail = document.getElementById("resumenEmail");
      var resumenTelefono = document.getElementById("resumenTelefono");
      
      // Asignar valores a los elementos del resumen
      resumenNombre.textContent = nombre;
      resumenApellido.textContent = apellido;
      resumenEmail.textContent = email;
      resumenTelefono.textContent = telefono;
      
      // Mostrar siguiente paso
      document.getElementById("paso2").style.display = "none";
      document.getElementById("resumen").style.display = "block";
      document.getElementById("ddh").style.display ="none";
      
    }
  }