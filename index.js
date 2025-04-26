//Write your code here

const attendee =  {attendeID: "T001" , name:"Alice Smith ", event: "JavaScript Conference" , ticketType: "VIP", ticketPrice: 150.00}
  

 attendee("T001", "Alice Smith", "JavaScript Conference", "VIP", 150.00);

 function logAttendeeName(attendee) {
  console.log(attendee.name); 
 }

function logTicketPrice (attendee) {
  console.log(attendee.ticketPrice);

}

function updateTicketType (attendee) {
  attendee.ticketType = newTicketType;
  
}

function updateTicketPrice (attendee, newTicketPrice) {
  attendee.ticketPrice = newTicketPrice;
}

function removeEventProperty(attendee) {
  delete attendee.event;
}

function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}



//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};