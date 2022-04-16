export default async (req, res) => {
  try {
    const API_KEY = process.env.OPENWEATHER_API_KEY;
    const lat = 28.0394654;
    const lon = -81.9498042;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&exclude=minutely,daily&lon=${lon}&appid=${API_KEY}&units=imperial`
    );

    if (response.ok) {
      const data = await response.json();
      res.status(response.status).json(data);
    } else {
      let message = response.status + ": " + response.statusText;
      res.status(response.status).json({ error: message });
    }
  } catch (error) {
    res.status(400).json({ err: error });
    console.log(error);
  }
};
