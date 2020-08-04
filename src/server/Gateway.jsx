const baseUrl = "https://5ebd3441ec34e90016192027.mockapi.io/tasks/events";

export const createEvent = (eventData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(eventData),
  }).then((response) => {
    if (!response.ok) throw new Error("Failed to create event");
  });
};

export const fetchEventsList = () => {
  return fetch(baseUrl).then((response) => {
    if (response.ok) return response.json();
    else {
      alert("Internal Server Error. Can't display events");
    }
  });
};

export const deleteEvent = (eventId) => {
  return fetch(`${baseUrl}/${eventId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) throw new Error("Failed to delete event");
  });
};
