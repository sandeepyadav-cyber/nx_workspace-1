/** Aspect ratio check: true when width/height < 2.5 (wide). SSR-safe. */
function isWideAspect(): boolean {
  if (
    typeof globalThis !== 'undefined' &&
    'innerWidth' in globalThis &&
    'innerHeight' in globalThis
  ) {
    const w = globalThis as unknown as { innerWidth: number; innerHeight: number };
    return w.innerWidth / w.innerHeight < 2.5;
  }
  return false;
}

export const theme = {
  light: {
    primary: '#E20074',
    background: '#FFF',
    primaryText: '#242639',
    secondaryText: '#606080',
    activeStatusBtnText: '',
    inActiveStatusBtnText: '#FF2525',
    primaryBorderRadius: '0.75rem',
    graphAxisColor: '#707C8B',
    isIncreasedColor: '#00B929',
    isDecreasedColor: '#FF2525',
    disabledBtnColor: '#999999',
  },
  changeColor: {
    positive: '#27C365',
    negative: '#FA6262',
  },
  chips: {
    // Nex score
    good: '#4DD583',
    fair: '#EFBA4F',
    poor: '#FF4848',
    // Gap To Competition
    winning: '#4DD583',
    competitive: '#EFBA4F',
    not_competitive: '#FF4848',
    primaryText: {
      color: '#FFF',
      textAlign: 'center',
      leadingTrim: 'both',
      textEdge: 'cap',
      fontFamily: 'Inter',
      fontSize:
        isWideAspect() ? '0.66vw' : '0.516vw',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
    },
  },
  tabs: {
    inActiveTab: {
      color: '#707C8B',
      textAlign: 'center',
      leadingTrim: 'both',
      textEdge: 'cap',
      fontSize:
        isWideAspect() ? '0.72vw' : '0.56vw',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '0.9375rem',
      letterSpacing: '0.0125rem',
      textTransform: 'uppercase',
    },
    activeTab: {
      color: '#E20074',
      textAlign: 'center',
      leadingTrim: 'both',
      textEdge: 'cap',
      fontSize:
        isWideAspect() ? '0.72vw' : '0.56vw',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '0.9375rem',
      letterSpacing: '0.0125rem',
      textTransform: 'uppercase',
    },
  },
  typography: {
    borderRadius: '1rem',
    fontFamily: 'Inter',
    fontWeight: {
      w3: 300,
      w4: 400,
      w5: 500,
      w6: 600,
      w7: 700,
      w8: 800, //using in l0,l1,l2,l3
    },
    fontSize: {
      h0:
        isWideAspect() ? '1.44vw' : '1.12vw',
      h1:
        isWideAspect() ? '1.02vw' : '0.79vw',
      h2:
        isWideAspect() ? '0.966vw' : '0.72vw', //using in l0,l1,l2,l3,headers
      h3:
        isWideAspect() ? '0.828vw' : '0.56vw',
      h4:
        isWideAspect() ? '0.66vw' : '0.516vw',
      h5:
        isWideAspect() ? '0.60vw' : '0.46vw',
      h6:
        isWideAspect() ? '0.54vw' : '0.42vw',
    },
    padding: {
      //p1:"1.88rem",  // using in l0,l1,l2,l3
      p1:
        isWideAspect() ? '1.81vw' : '1.41vw',
      p2: '2.5rem',
    },
    gap: {
      g1:
        isWideAspect() ? '2.40vw' : '1.87vw',
      g2:
        isWideAspect() ? '1.50vw' : '1.17vw',
      g3:
        isWideAspect() ? '1.20vw' : '0.93vw',
      g4:
        isWideAspect() ? '0.67vw' : '0.52vw',
      g5:
        isWideAspect() ? '0.60vw' : '0.46vw',
      g6:
        isWideAspect() ? '0.12vw' : '0.093vw',
      g7:
        isWideAspect() ? '0.38vw' : '0.30vw',
    },
    headings: {
      mainHeading: {
        leadingTrim: 'both',
        textEdge: 'cap',
        fontSize:
          isWideAspect() ? '0.966vw' : '0.72vw',
        l3FontSize:
          isWideAspect() ? '1.092vw' : '0.72vw',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '0.01875rem',
        textTransform: 'uppercase',
      },
      subHeading: {
        leadingTrim: 'both',
        textEdge: 'cap',
        textAlign: 'center',
        fontSize:
          isWideAspect() ? '0.72vw' : '0.56vw',
        fontStyle: 'normal',
        lineHeight: '0.625rem',
        textTransform: 'uppercase',
      },
    },
  },
};
