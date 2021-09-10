$("#payment-button").click(function() {
    submit();
  });

  let url = "https://backoffice.pharospayments.com/api/v1/transaction_requests"
  let apiKey = "68b0180a311e00933daef91cfbf04d9c0e2354c991a0e8053abf7d3f80b1aad7"

  function submit() { 
    let params = {
      transaction_request: {
        currency_code: "484", 
        terminal_id: "1754",
        amount: "99.00",
        amount_base_0: "0.00",
        amount_base_min: "88.39",
        amount_base_basic: "88.39",
        amount_tax: "10.61",
        cancel_url: "http://example.com/cancel.html",
        success_url: "http://example.com/success.html",
        error_url: "http://example.com/error.html",     
        reference: "Reference",
        email: "ignacio@eagerworks.com",
        phone: '123123',
        name: "Nacho",
        api_key: apiKey
      }
    }

    post(url, params);
  }

  function post(path, params) {
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", path);

    params = params["transaction_request"]
    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", `transaction_request[${key}]`);
        hiddenField.setAttribute("value", params[key]);
        form.appendChild(hiddenField);
      }
    }

    document.body.appendChild(form);
    form.submit();
  }
