interface JsonData {
    [key: string]: {
      [key: string]: {
        [key: string]: string;
      };
    };
  }
  
  const jsonData: JsonData = {
    "7d": {
      "Reusable": {
        "Q1-23": "10%",
        "Q2-23": "4%"
      },
      "Natural": {
        "Q1-23": "2%",
        "Q2-23": "11%"
      },
      "Compost": {
        "Q1-23": "7%",
        "Q2-23": "5%"
      },
      "Reusable..": {
        "Q1-23": "3%",
        "Q2-23": "4%"
      },
      "Total": {
        "Q1-23": "8%",
        "Q2-23": "12%"
      }
    },
    "14d": {
      "Reusable": {
        "Q1-23": "35%",
        "Q2-23": "4%"
      },
      "Natural": {
        "Q1-23": "2%",
        "Q2-23": "11%"
      },
      "Compost": {
        "Q1-23": "7%",
        "Q2-23": "5%"
      },
      "Reusable..": {
        "Q1-23": "3%",
        "Q2-23": "4%"
      },
      "Total": {
        "Q1-23": "8%",
        "Q2-23": "12%"
      }
    },
    "30d": {
      "Reusable": {
        "Q1-23": "95%",
        "Q2-23": "4%"
      },
      "Natural": {
        "Q1-23": "2%",
        "Q2-23": "11%"
      },
      "Compost": {
        "Q1-23": "7%",
        "Q2-23": "5%"
      },
      "Reusable..": {
        "Q1-23": "3%",
        "Q2-23": "4%"
      },
      "Total": {
        "Q1-23": "8%",
        "Q2-23": "12%"
      }
    }
  };
  
  export default jsonData;
  