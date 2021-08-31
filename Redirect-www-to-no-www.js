exports.handler = async (event) => {
    const request = event.Records[0].cf.request;
  
    if (request.headers.host[0].value === 'www.andersenlab.com') {
        if ((request.uri === "" && request.querystring === "") || (request.uri == null && request.querystring == null)) {
            return {
                status: '301',
                statusDescription: `Redirecting to apex domain`,
                headers: {
                location: [{
                    key: 'Location',
                    value: `https://andersenlab.com`
                }]
                }
            };      
        }
        if ((request.querystring === "") || (request.querystring == null)) {
            return {
                status: '301',
                statusDescription: `Redirecting to apex domain`,
                headers: {
                location: [{
                    key: 'Location',
                    value: `https://andersenlab.com${request.uri}`
                }]
                }
            };      
        }



        if (request.uri === undefined && request.querystring === undefined) {
            return {
                status: '301',
                statusDescription: `Redirecting to apex domain`,
                headers: {
                location: [{
                    key: 'Location',
                    value: `https://andersenlab.com`
                }]
                }
            };      
        } else if (request.uri !== undefined && request.querystring === undefined) {
            return {
                status: '301',
                statusDescription: `Redirecting to apex domain`,
                headers: {
                  location: [{
                    key: 'Location',
                    value: `https://andersenlab.com${request.uri}`
                  }]
                }
              };      
        } else if (request.uri === undefined && request.querystring !== undefined) {
            return {
                status: '301',
                statusDescription: `Redirecting to apex domain`,
                headers: {
                location: [{
                    key: 'Location',
                    value: `https://andersenlab.com?${request.querystring}`
                }]
                }
            };                
        } else if (request.uri !== undefined && request.querystring !== undefined) {
            return {
                status: '301',
                statusDescription: `Redirecting to apex domain`,
                headers: {
                location: [{
                    key: 'Location',
                    value: `https://andersenlab.com${request.uri}?${request.querystring}`
                }]
                }
            };                
        } 
        }     
    return request;
  };