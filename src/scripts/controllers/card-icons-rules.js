export const iconRules = {
  pets: new Map([
    [
      true,
      {
        key: 'alt="pet"',
        replacement: 'alt="pet" style="display: block;"',
      },
    ],
    [
      false,
      {
        key: 'alt="toxic"',
        replacement: 'alt="toxic" style="display: block;"',
      },
    ],
  ]),
  sun: new Map([
    [
      'no',
      {
        key: 'alt="no-sun"',
        replacement: 'alt="no-sun" style="display: block;"',
      },
    ],
    [
      'low',
      {
        key: 'alt="low-sun"',
        replacement: 'alt="low-sun" style="display: block;"',
      },
    ],
    [
      'high',
      {
        key: 'alt="sun"',
        replacement: 'alt="sun" style="display: block;"',
      },
    ],
  ]),
  water: new Map([
    [
      'rarely',
      {
        key: 'alt="1-drop.svg"',
        replacement: 'alt="1-drop.svg" style="display: block;"',
      },
    ],
    [
      'regularly',
      {
        key: 'alt="2-drops.svg"',
        replacement: 'alt="2-drops.svg" style="display: block;"',
      },
    ],
    [
      'daily',
      {
        key: 'alt="3-drops.svg"',
        replacement: 'alt="3-drops.svg" style="display: block;"',
      },
    ],
  ]),
};
