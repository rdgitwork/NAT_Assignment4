const handleAlerts = (alertType, message) => {
    alertBox.innerHTML = `
      
    
      <div class="alert alert-${alertType}" role="alert">
      
          ${message}
      </div>`;
};
