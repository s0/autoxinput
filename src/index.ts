import * as xinput from './xinput';

/**
 * Mapping from input name to a monitor to associate with it
 */
interface InputMapping {
  [id: string]: string | undefined;
}

const CONFIG: InputMapping = {
  'Wacom Pen and multitouch sensor Pen Pen': 'eDP-1',
  'Wacom Pen and multitouch sensor Finger': 'eDP-1',
  'Wacom Pen and multitouch sensor Eraser': 'eDP-1',
  'Weida Hi-Tech': 'DP-1-1',
};

(async () => {

  const devices = await xinput.list();

  for (const dev of devices) {
    console.log(dev.name);
    const map = CONFIG[dev.name];
    if (map) {
      await xinput.mapToOutput(dev.id, map).catch(err => console.log(err));
    }
  }

})();