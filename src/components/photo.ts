const breakpoints = [1080, 1080, 1080, 1080, 1080, 1080, 1080, 1080];

const unsplashLink = (id: string, width: number, height: number) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  { id: "8gVv6nxq6gY", width: 1080, height: 800 },
  { id: "Dhmn6ete6g8", width: 1080, height: 800 },
  { id: "RkBTPqPEGDo", width: 1080, height: 800 },
  { id: "Yizrl9N_eDA", width: 1080, height: 800 },
  { id: "KG3TyFi0iTU", width: 1080, height: 800 },
  { id: "Jztmx9yqjBw", width: 1080, height: 800 },
  { id: "-heLWtuAN3c", width: 1080, height: 800 },
  { id: "xOigCUcFdA8", width: 1080, height: 800 },
  { id: "1azAjl8FTnU", width: 1080, height: 800 },
  { id: "ALrCdq-ui_Q", width: 1080, height: 800 },
  { id: "twukN12EN7c", width: 1080, height: 800 },
  { id: "9UjEyzA6pP4", width: 1080, height: 800 },
  { id: "sEXGgun3ZiE", width: 1080, height: 800 },
  { id: "S-cdwrx-YuQ", width: 1080, height: 800 },
  { id: "q-motCAvPBM", width: 1080, height: 800 },
  { id: "Xn4L310ztMU", width: 1080, height: 800 },
  { id: "iMchCC-3_fE", width: 1080, height: 800 },
  { id: "X48pUOPKf7A", width: 1080, height: 800 },
  { id: "GbLS6YVXj0U", width: 1080, height: 800 },
  { id: "9CRd1J1rEOM", width: 1080, height: 800 },
  { id: "xKhtkhc9HbQ", width: 1080, height: 800 },
];

const photos = unsplashPhotos.map((photo) => ({
  src: unsplashLink(photo.id, photo.width, photo.height),
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    console.log('height', height)
    return {
      src: unsplashLink(photo.id, breakpoint, height),
      width: breakpoint,
      height,
    };
  }),
}));

export default photos;
