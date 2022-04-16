export default {
  name: "content",
  title: "Content",
  type: "document",
  fields: [
    {
      name: "status",
      title: "Is Practice Cancelled Today?",
      type: "boolean",
      description: "Enable this option if practice is cancelled.",
    },
    {
      name: "days",
      title: "Practice Days",
      type: "string",
      initialValue: "Tuesday, Wednesday, Friday",
      description:
        "Enter the days practice will be held. (e.g. Tuesday, Wednesday, Friday)",
    },
    {
      name: "times",
      title: "Practice Times",
      type: "string",
      initialValue: "3:00 PM to 5:00 PM",
      description:
        "Enter the time range for practice - format: H:MM PM to H:MM PM.",
    },
    {
      name: "date",
      Title: "Date",
      type: "datetime",
      description: "DO NOT CHANGE. THIS VALUE IS USED INTERNALLY.",
    },
  ],
};
