export const broadcastData = (data) =>{
   fetch("api/calls", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {"content-type": "application/json"}
                  }
   );
};