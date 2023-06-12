import { type StateUpdater, useEffect, useState } from "preact/hooks";

export default function Audio(props) {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  useEffect(() => {
    const recorder = document.getElementById("recorder") as HTMLInputElement;
    const player = document.getElementById("player") as HTMLAudioElement;

    console.log(recorder);

    if (!recorder || !player) return;

    recorder.addEventListener("change", function (e) {
      if (!e) return;
      if (!(e.target instanceof HTMLInputElement)) return;
      const file = (e.target as HTMLInputElement).files;
      if (!file) return;
      const url = URL.createObjectURL(file[0]);
      // Do something with the audio file.
      // player.src = url;
      setAudioUrl(url);
    });
  }, []);
  
  return (
    <div>
      <input type="file" accept="audio/*" capture id="recorder" />
      <audio id="player" controls src={audioUrl || ""}></audio>
    </div>
  );
}
