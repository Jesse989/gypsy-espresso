const clientApi = (payload, orderOrSub) => {
  fetch(`/api/${orderOrSub}`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(payload),
  }).then(token => {
    if (token.status === 200) {
      //toggle switch to turn on thank you box
      alert(`Thank you, your order is being processed`)
      return token;
    } else {
      //toggle swithc to turn on error box
      alert("There was an error, please try again")
      return "error";
    }
  })
}

export default clientApi;
