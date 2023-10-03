function validation(inputFiled, inputName, value1, value2, value3, value4) {
  if (inputFiled > value1) {
    setIptState((prev) => {
      return {
        ...prev,
        [inputName]: "",
      };
    });

    setErrorState((prev) => {
      return {
        ...prev,
        [inputName]: "can't be grater then 1 000 000",
      };
    });
  } else if (inputFiled === 0) {
    setIptState((prev) => {
      return {
        ...prev,
        [inputName]: "",
      };
    });

    setErrorState((prev) => {
      return {
        ...prev,
        [inputName]: "can't be 0",
      };
    });
  } else if (inputFiled <= -1) {
    setIptState((prev) => {
      return {
        ...prev,
        [inputName]: "",
      };
    });

    setErrorState((prev) => {
      return {
        ...prev,
        [inputName]: "can't be lower than 0",
      };
    });
  } else if (typeof inputFiled === "string" && inputFiled !== "") {
    setIptState((prev) => {
      return {
        ...prev,
        [inputName]: "",
      };
    });
    setErrorState((prev) => {
      return {
        ...prev,
        [inputName]: "can't be text",
      };
    });
  }
  useEffect(() => {
    if (inputFiled > 0 && inputFiled < value1) {
      setErrorState((prev) => {
        return {
          ...prev,
          [inputName]: "",
        };
      });
    }
  }, [inputFiled]);
}

//copy
//people
if (iptState.people > 1000) {
  setIptState((prev) => {
    return {
      ...prev,
      people: "",
    };
  });

  setErrorState((prev) => {
    return {
      ...prev,
      people: "can't be grater then 1000",
    };
  });
} else if (iptState.people === 0) {
  setIptState((prev) => {
    return {
      ...prev,
      people: "",
    };
  });
  setErrorState((prev) => {
    return {
      ...prev,
      people: "can't be 0",
    };
  });
} else if (iptState.people <= -1) {
  setIptState((prev) => {
    return {
      ...prev,
      people: "",
    };
  });

  setErrorState((prev) => {
    return {
      ...prev,
      people: "can't be lower than 0",
    };
  });
} else if (typeof iptState.people === "string" && iptState.people !== "") {
  setIptState((prev) => {
    return {
      ...prev,
      people: "",
    };
  });
  setErrorState((prev) => {
    return {
      ...prev,
      people: "can't be text",
    };
  });
}
useEffect(() => {
  if (iptState.people > 0 && iptState.people < 1000) {
    setErrorState((prev) => {
      return {
        ...prev,
        people: "",
      };
    });
  }
}, [iptState.people]);
//bill
if (iptState.bill > 1000000) {
  setIptState((prev) => {
    return {
      ...prev,
      bill: "",
    };
  });

  setErrorState((prev) => {
    return {
      ...prev,
      bill: "can't be grater then 1 000 000",
    };
  });
} else if (iptState.bill === 0) {
  setIptState((prev) => {
    return {
      ...prev,
      bill: "",
    };
  });

  setErrorState((prev) => {
    return {
      ...prev,
      bill: "can't be 0",
    };
  });
} else if (iptState.bill <= -1) {
  setIptState((prev) => {
    return {
      ...prev,
      bill: "",
    };
  });

  setErrorState((prev) => {
    return {
      ...prev,
      bill: "can't be lower than 0",
    };
  });
} else if (typeof iptState.bill === "string" && iptState.bill !== "") {
  setIptState((prev) => {
    return {
      ...prev,
      bill: "",
    };
  });
  setErrorState((prev) => {
    return {
      ...prev,
      bill: "can't be text",
    };
  });
}
useEffect(() => {
  if (iptState.bill > 0 && iptState.bill < 100000) {
    setErrorState((prev) => {
      return {
        ...prev,
        bill: "",
      };
    });
  }
}, [iptState.bill]);
//tip
if (iptState.Custom > 100) {
  setIptState((prev) => {
    return {
      ...prev,
      Custom: "",
    };
  });

  setErrorState((prev) => {
    return {
      ...prev,
      Custom: "can't be grater then 100",
    };
  });
} else if (iptState.Custom === 0) {
  setIptState((prev) => {
    return {
      ...prev,
      Custom: "",
    };
  });
  setErrorState((prev) => {
    return {
      ...prev,
      Custom: "can't be 0",
    };
  });
} else if (iptState.Custom <= -1) {
  setIptState((prev) => {
    return {
      ...prev,
      Custom: "",
    };
  });

  setErrorState((prev) => {
    return {
      ...prev,
      Custom: "can't be lower than 0",
    };
  });
} else if (typeof iptState.Custom === "string" && iptState.Custom !== "") {
  setIptState((prev) => {
    return {
      ...prev,
      Custom: "",
    };
  });
  setErrorState((prev) => {
    return {
      ...prev,
      Custom: "can't be text",
    };
  });
}
useEffect(() => {
  if ((iptState.Custom > 0 && iptState.Custom < 100) || btnValue > 0) {
    setErrorState((prev) => {
      return {
        ...prev,
        Custom: "",
      };
    });
  }
}, [iptState.Custom, btnValue]);
