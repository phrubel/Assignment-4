document.getElementById("addFirstTicket").addEventListener("click", function () {
    ticketChangeHandler(true);
  });
document.getElementById("lessFirstTicket").addEventListener("click", function () {
    ticketChangeHandler(false);
  });
function ticketChangeHandler(ifIncrease) {
  const ticketInput = document.getElementById("firstTicketValue");
  const addTicketValue = parseInt(ticketInput.value);
  let ticketNewValue = ticketInput;
  if (ifIncrease == true) {
    ticketNewValue = addTicketValue + 1;
  }
  if (ifIncrease == false) {
    ticketNewValue = addTicketValue - 1;
  }
  ticketInput.value = ticketNewValue;
  const totalTicketPrice = ticketNewValue * 150;
  document.getElementById("totalTicketPrice").innerText ="$" + totalTicketPrice;
  
}

// // add & less Economy Ticket with Value
// document.getElementById("addEconomyTicket").addEventListener("click", function () {
//     ticketChangeHandler(true);
//   });
// document.getElementById("lessEconomyTicket").addEventListener("click", function () {
//     ticketChangeHandler(false);
//   });
// function ticketChangeHandler(ifIncrease) {
//   const ticketInput = document.getElementById("firstTicketValue");
//   const addTicketValue = parseInt(ticketInput.value);
//   let ticketNewValue = ticketInput;
//   if (ifIncrease == true) {
//     ticketNewValue = addTicketValue + 1;
//   }
//   if (ifIncrease == false) {
//     ticketNewValue = addTicketValue - 1;
//   }
//   ticketInput.value = ticketNewValue;
//   const totalTicketPrice = ticketNewValue * 150;
//   document.getElementById("totalTicketPrice").innerText ="$" + totalTicketPrice;
  
// }
