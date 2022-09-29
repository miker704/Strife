
export const createDmMessage = (dm_message) =>
  $.ajax({ url: "/api/dm_messages", method: "POST", data: { dm_message } })


export const updateDmMessage = (dm_message) =>
  $.ajax({ url: `/api/dm_messages/${dm_message.id}`, method: "PATCH", data: { dm_message } })

export const deleteDmMessage = (dm_messageId) =>
  $.ajax({ url: `/api/dm_messages/${dm_messageId}`, method: "DELETE" })

