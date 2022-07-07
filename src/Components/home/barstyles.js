export const customStyles = {
    control: (base, state) => ({
      ...base,

      fontSize: 18,
      border: state.isFocused ? 0 : 0,
      boxShadow: state.isFocused ? 0 : 0,
      cursor: "text",
      borderRadius: 10,
      borderBottom: "solid 1px",
    }),

    option: (styles, { isFocused }) => {
      return {
        ...styles,
        cursor: "pointer",
        backgroundColor: isFocused ? "white" : "white",
        color: isFocused ? "rgba(255, 80, 1086)" : "black",
        lineHeight: 2,
      };
    },

    input: (styles) => ({
      ...styles,
      color: "black",
      fontFamily: "arial",
    }),

    menu: (styles) => ({
      ...styles,
      marginTop: 0,
      boxShadow: "none",
      borderRadius: 0,
    }),

    singleValue: (styles) => ({
      ...styles,
      color: "rgba(255, 80, 86)",
    }),
  };