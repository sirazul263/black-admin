import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Font,
  Image,
  PDFViewer,
} from "@react-pdf/renderer";

const Invoice = ({ data }) => {
  console.log(data);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const styles = StyleSheet.create({
    fontFamily: "Ubuntu",
    body: {
      paddingBottom: 65,
      marginTop: 20,
      width: 1000,
    },
    header: {
      fontSize: 14,
      fontWeight: 700,
    },
    headline: {
      fontSize: 12,
      color: "#EB1933",
      margin: "10px 12px 5px 12px",
    },
    text: {
      margin: 12,
      fontSize: 12,
      textAlign: "justify",
    },
    text2: {
      fontSize: 11,
      textAlign: "justify",
      margin: "2px 12px",
      lineHeight: 1.5,
    },

    text3: {
      fontSize: 10,
      textAlign: "justify",
      margin: "2px 12px",
      color: "#EB1933",
      fontWeight: "normal",
      lineHeight: 1.3,
    },
    text4: {
      fontSize: 10,
      margin: "5px 12px 5px 15px",
      color: "#EB1933",
      fontWeight: "normal",
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
    image: {
      width: "50%",
      padding: 10,
    },
    logo: {
      width: 50,
    },
  });

  const products = [
    {
      name: "BASE M",
      quantity: 1,
      price: 530.0,
    },
    {
      name: "LAVENDAR M",
      quantity: 1,
      price: 530.0,
    },
    {
      name: "BLACK M",
      quantity: 1,
      price: 540.0,
    },
  ];

  return (
    <div>
      {isClient && (
        <PDFDownloadLink
          document={
            <Document>
              <Page style={styles.body}>
                <View style={{ margin: "0px 35px" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      margin: "0px 15px",
                    }}
                  >
                    <View>
                      <Text style={styles.header}>Black Lifestyle </Text>
                      <Text
                        style={{
                          fontSize: 10,
                          marginTop: 5,
                        }}
                      >
                        Help Line : 018330093682
                      </Text>
                    </View>

                    <View>
                      <Image
                        src="data:image/png;base64,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"
                        style={styles.logo}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      margin: "0px 15px",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: 10,
                          marginTop: 5,
                        }}
                      >
                        Invoice No : SO-1045
                      </Text>
                      <Text
                        style={{
                          fontSize: 10,
                          marginTop: 3,
                        }}
                      >
                        Invoice Date : Dec 09, 2023
                      </Text>
                      <Text
                        style={{
                          fontSize: 10,
                          marginTop: 3,
                        }}
                      >
                        Courier : Steadfast
                      </Text>
                    </View>

                    <View style={{ marginLeft: 40 }}>
                      <Text
                        style={{
                          fontSize: 12,
                          marginTop: 5,
                        }}
                      >
                        Invoice To :
                      </Text>

                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: 3,
                        }}
                      >
                        <View>
                          <Image
                            src="data:image/png;base64,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"
                            style={{ height: 14 }}
                          />
                        </View>

                        <Text
                          style={{
                            fontSize: 10,
                            marginTop: 3,
                            marginLeft: 5,
                          }}
                        >
                          Jasmen Akter Sime
                        </Text>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: 3,
                        }}
                      >
                        <View>
                          <Image
                            src="data:image/png;base64,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"
                            style={{ height: 14 }}
                          />
                        </View>

                        <Text
                          style={{
                            fontSize: 10,
                            marginTop: 3,
                            marginLeft: 5,
                          }}
                        >
                          +8801232434234
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: 3,
                        }}
                      >
                        <View>
                          <Image
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d13uF1Vnf/x9703vUAgjU5CFZQ+gChdlBHFglJERGRk1EFFsaCDhcEfiiiIOo6i4CA2EBUFEUGaSO+9BUggEAgJJBBSSHJzfn+se4bN5ZZzzt1rf9Y++/N6nu9z8zzis/Z37b3K2WWtDsysbMYDawETe8Wknr+Te/6O6/nvxwHDe/69Rs/fEcDYnn8vBpb3/HtBz98VwEs9/34JeA6YB8zv+XfveDrz35tZCXSoD8DMXmMksC6wUR+xDrC27tAGtAyYAzzWR8wAXtQdmpn15gmAmc5IYEtga2CrzN+1lAcV0dPAvcBdwD09cR+v3H0wswJ5AmBWjNWBXYDtCAP91sBmwDDlQSVgJfAQYTJwF3AncD2+W2AWnScAZnGsA7wZ2LXn73ZAp/SIyuUx4Drg2p6/92kPx6z9eAJglo+tgL0JA/6bCBMAy88cwmTgeuAKwqMEMxsCTwDMWjOWcEt/f+A9wAbaw6mcucBlwEXA34GF2sMxKx9PAMwatxFhwH8nsDvhUzrT6ya8O/AXwoTgdqAmPSIzMyu1DmBn4FTgCcKg4kg/Hge+C+z02lNqZnW+A2D2Wq8HDgQOBTYVH4sNzRPAn4DzCS8T+s6AWQ9PAMyCrYGDgIOBTcTHYnHMAM7rCb9EaGZWYasB/w7civ62taPYuA84DlgTMzOrjB2AM4BF6AcihzaWAr8D9sHMzNrS6oRf+3egH3QcacYDhLsCkzAzs9LbEvgZ4ZeeeoBxlCOWEK6ZLTAzs9LZlXBrdyX6AcVRzlhFWGRof8zMLGmdhM76BvSDh6O94g7gcLx5k5lZUsYBxxIWgFEPFI72jpnAZwhLQZuZmcgIwot9T6MfGBzVinmEFwZHY2ZmhakP/E+hHwgc1Y65hInAKMzMLJrhhOewj6Lv+B2ObDwBHAOMxMzMctOJB35HOWIGcBjhmjUzsyHYCb/V7yhf3AbshpmZNW094BzCt9jqztzhaDUuAqZhZmaDGkN4qcrr9DvaJZYAJwPjMTOz1+gADgRmoe+wHY4Y8SThXRZvw25m1uN1wDXoO2iHo4i4GtgMM7Eu9QFYpQ0DvgCcC2wsPhazokwDjiJ81no90C09GjOzgm0L3Ir+15jDoYy7CV+6mJm1vdGEF6K8S5/DEaIbOIOwp4VZYfwyihXprYSObrr6QNrEfMIGSHOB53pifs/feT1/FwEvASt6/j8Lev4uBxb3/HssYXllgDV6/g4nDEjjgYnAZGBSz7/rMZVwO3ti3olV1GOEJa6vUB+IVYMnAFaEUYRf/Z/G11wzugmrH95P+DpiZk/M6olFouPqbTxhIjC9J+r/3pLwbodXxWtcDTgd+DLwsvhYrM25M7bYtgR+TXjmb/1bCNzXE/cTVpK7g1d+pZfVCGBTYAfCtfB6YEfC3QPr333AB4G71AdiZtasDsLmKEvRP2NNLVYSBvf/Bg4FNmixjstsQ8IA99/AnfidkL5iCfBJ/EPNzEpkLeAS9B1oKrGM8Fz3BOBteEW4vqwG7Av8F3Al4fa3+rylEhfjOyZmVgLvBJ5F32mqYybwP8C7CC/ZWXPGAe8GfoxXh6wBzwD7DaVCzcxi6QJOorqb96wALgM+S1jZ0PK1BXAscDmhrtXnWxGrgBPxS5VmlpCJwN/Qd5BFRzdwLeFdB9+iLc6ahDX1L6Kak4ErgSlDrkUzsyHalvD9srpTVAz6a+dQfzY0E3llMlClFwmfIHxNYWYmcQTVect/FvBVYL0c6s3iWB/4GmFxJPX1UkQsAT6US82ZmTVoGGFhH3UHGDtWAn8nbFM8LJeasyJ0AvsAvyOseKi+jmLHGbyykqOZWTQTgX+i7/RixqPAlwifM1q5rUVYVa/dH1P9g/BuhJlZFBsBD6Lv7GLFrYTnyf613346gf2B69BfZ7HiEWCzvCrMzKzujYRNZ9SdXN7RTXiBbJ/8qsoStwNwDu350uB8YLf8qsrMqu4g2u9lv6WEhXo2zbGerFw2A35C+13bS4D351hPZlZRxxB+Jas7tbxiOeGlqXXzrCQrtfWA79NeE4FVhKWnzcyaNowwUKo7sjwH/p8RNqEx68s04Oe01+JCPyas0mlm1pARwPnoO688opvwOZhv9VujphEmv+3yjsCfgJF5VpCZtafRhN3H1J1WHnEpYf95s1ZsRVgHQn0d5xEXAaPyrR4zaydjaY8O72HC4j1medgHuA/9dT3UuBpvRW1mfZhA+b+RXkR48cm3Oy1vwwkvxC5Ef50PJW7GCwaZWcYk4Db0nVOr0Q38FO+QZvFNBc6k3Nte30po82ZWcWtT7tubDwC75l4rZgPbHXgI/fXfatyLl7o2q7RJhI5A3Rm1EisIGxL5xSZTGUV45PQy+vbQSjxIuKNhZhWzOnAL+k6olbgD2D7/KjFryVbATejbRStxJ7BG/lViZqkaB1yPvvNpNpYAn8ULm1h6uoDPUc7VBK8jfAFkZm1uNHAl+k6n2bgX2DpCfZjlaQvCHSp1e2k2rsCP08za2nDCgiDqzqaZWEVYp92f9llZjCS8n1K2PTQuxe3MrC11Aeei72SaiWeA/WJUhlkB9gGeQt+Omok/EPYBMbM2UraNfS7A3ypb+U0GLkTfnpqJ/4lSE2Ym8SX0nUqjsRI4DuiIUhNmxesgrCJYpl0GPx+lJsysUAdSnmeR8wi3Tc3a0R6Ex1rqdtZIrAIOjVMNZlaEnYDF6DuTRuI2wjasZu1sPeBG9O2tkVgKvClONZhZTBsBc9F3Io3EOYTPE82qYCRh7wp1u2sk5gGbxqkGM4thEmFLXHXnMVisAD4WqQ7MUnc04Z0XdTscLB7EOwialcII4J/oO43B4kXgXyPVgVlZvIOwjbW6PQ4W/yCsI2JmCfsx+s5isHgKr+VvVrcV8AT6djlY/DBWBZjZ0B2GvpMYLO4GNohVAWYltQ5wO/r2OVh8JFYFmFnrtiH9N/4vI+xCaGavNQ64GH07HSiWAjvEqgAza96awKPoO4eB4rf4GaLZYIYRvopRt9eBYhZepdMsCZ3AJeg7hYHil3h9cbNGdQFnoW+3A8VleFtuM7lvou8MBor/IUxSzKxxHcD30LffgeLEaNmb2aDeSViyU90R9Bffipe6WSWcjL4d9xfdwNvjpW5m/ZlC2uuKnxwvdbNKOQ59e+4vngXWipe6mfXWAfwFfePvL46Pl7pZJX0NfbvuLy7Bu3eaFeYY9I2+vzgtYt5mVfYt9O27vzg6Yt5m1uP1wBL0Db6v8EphZnGdir6d9xVLCSsamlkkI4E70Tf2vuJs/La/WWwdpLuT4D3AqHipm1Xb6egbeV9xPv4m2KwoXYSFtdTtvq84NWLeZpW1D2l+8ncJXuTHrGjDCYvxqNt/71gFvCVi3maVMwZ4BH3j7h334LX9zVTGk+YjwZnA2Ih5m1XKaegbde94Clg/ZtJmNqh1gdno+4PecUrMpM2qYkdgJfoGnY0XgW1jJm1mDdseWIS+X8jGSrxroNmQDCO9PcJXAvvHTNrMmvZ2YAX6/iEbd+EdQM1adjz6Rtw7PhY1YzNr1dHo+4fe8aWoGZu1qc0Ii2uoG3A2zoiasZkN1Zno+4lsLANeFzVjszbTAVyDvvFm4ybCQkRmlq5RwK3o+4tsXIX3CjBr2GHoG2025gPTYiZsZrnZAJiHvt/IxiFRMzZrE2OAx9E32HqsBN4WNWMzy9tbSOvrodl4bQCzQX0DfWPNxufjpmtmkfwn+v4jG1+Lm641y89l0rIh8AAwWn0gPf4EHEBovJa2LsKiMNMJj2umA1OAycBEYBIwDpjQ89+P4JVfZIuB5T3/Xkj4pvw5wqOf+cBcYBZhhbdZhEWguuOlYjnpAC4C3qE+kB5LgM2BJ9UHYoEnAGk5DzhIfRA95gDbEAYAS8sUwuIvW2fidRT3zfUKwkT1HuDunrgdeLag8q1xkwnnZy31gfT4DfBB9UGYpeZNpLPZzyrCwiKWhs2BjwL/CzyE/vroLx7qOcZ/6zlmS8O+pNW37Bo3XbNy6QRuQd846/HduOnaIMYQdn88mfBLW309tBozCWtHHAislmsNWbN+gP56qMdthD7PzIDD0TfKetyJv/dXGE+4NfpnwuIp6usg71hGeKfkUMK7CFasUYRHNurroB5+DGBGeG6byla/SwnPk60YXcC7gD8QXpBSn/+iYgnwe8KeEl1DrkVr1OtJ5zqbQdjrxKzSjkLfGOtxbORcLVgXOI7wRr36nKtjDuFRx0ZDqVBr2BfRn/N6HBk5V7OkjSA8J1U3xBpwM/41FttuhNvg3ejPd2rR3VM3u7Vcu9aIYaSzVPAsQh9oVkmfRN8Ia4TPuraLnGtVdRE+7bwJ/XkuS9xIeHHQE9I4tiGs+6A+zzXg45FzNUvSKMKCGOoGWCOsPmj56iA8474L/fkta9xPeEHWE4H8fRv9+a0RFpVKZeEzs8J8Dn3jqwEPEiYjlp/34IE/z7gTeHdTZ8AGM5rwIp763NaAYyLnapaUsYTlVdUNrxsvypGn7YB/oD+v7Ro3Ajs3fDZsMHuQxgJBz+JPQ61CjkXf6GrAT2MnWhETge+T1u5r7RrdwDnA1IbOjA3mbPTntIbvAlhFDCON7X5fIJ31wcuqA/gYYQMd9fmsWiwgfELr/UyGZiqhL1Cfz5l4XQCrgEPRN7Ya/uZ/qDYGLkd/Hqse/yRshGSt+zL681gDDo6dqJlaCp+DPYKX+21VJ/AFwqqJ6vPoCLGE8FKt15dvzQjgYfTn8ZbYiZop7Y2+kdWAd8ZOtE2tBVyC/vw5+o4rgPX6PXs2kPeiP381wouJZm3pYvQN7PLoWban9wPPoT9/joFjPnBAP+fQBnYp+vN3YfQszQS2RP/JzUrChiDWuGGEterVHaOjuTiDsNGWNW5r9MtUr8LvdFgbOhN9p/iL6Fm2l8mE28rq8+ZoLf4JrP2as2oD+Q368+bPk62tTAAWo21UK4HNYifaRnYmLFOq7gwdQ4sngZ2wRm1K2BtEec6WAGvETtSsKJ9G3xH+LHqW7eO96CdsjvxiKf7ErBlnoz9nR8dO0qwod6JtTMuB6dGzbA/HoH8O6sg/VgEnYI2YBryM9nzdFTtJsyLsgr7z++/oWZZfB/BD9OfKETdOx6sHNuIM9Odqx+hZmkX2c7SNaCn+NnowXcBZ6Ds8RzHxS7zs7GDWB5ahPU9+GdBKbTywCG0j+lH0LMttGGFzGfWg5Cg2zsOfCQ5GfRdgEaEPNSulT6BtQN2Et3qtb8OBC9APRg5NXIAnAQPZDP37MB+NnqVZJLehbTx/iJ9iaXWRxjfPDm38Hj8OGMif0Z6fm+KnaJa/rdF3bm+OnmU5dRCeL6rPjyONOBtvJNSf3dGfny2jZ2mWs5PQNpqb46dYWn7b39E7Tsf6cwPac3NC9Awryp/DxPMw2ufv78ePAPryOeC76oOIbAFwNzADmAnMAp4mbGb0HGGltZd7/gKMIWwPPQaY2BPrEL4Hn0a4jrem/VdnOxb4nvogEnQQ4aVJlYfw/gBWItujnTE/SnjGba/2PvQvNcWI+wlrPbyP8PlWLBsQJpY/Ah5IIO+8o5uwCqS9WhdhIqk8N1tHz9IsJ6egbSzHxU+xdHYm/OJVDzJ5xDzC5lKHot3sZm3gg4Q1FOajr5c8YjHeO6Avx6M9LyfFT9Fs6DrQzpZX4B3QeptK2BRGPbgMJZYBFwEHAiPyrZ5cdAH7ENZUKPtE62nCIxB7xVqEJcVV5+RR/MjaSuCNaDuv38dPsVSGA9egH1RajdsI60msmXfFRLQm8B/oP4MdSlyNPw/sTf1J4A7xUzQbmtPQNpJ946dYKt9HP5i0EtcC+1P+Xz27Apejr89W4rQI9VFm70R7Pr4dP0Wz1nUAT6BrILPw98xZ70c/iDQbfyN8e91u9gAuQ1+/zYZfCnxFFzAb3bl4LH6KZq1TL/7zlfgplsZ6hE/e1ANIo3Ez4UXFdrcLcCv6+m405gPrRqmJcjoR7fnYIn6KZq05Dl3D6Ma7/tV1Up7bzguAY6jWZ5udwOGU58uBq/GdtbppwCp05+LY6BmatehqtJ2UBZ9HP2gMFqsIS9BOiVMFpTCV8NWAckBpND4XqQ7K6Hp05+HvBeRn1rTV0H4m84n4KZbCZsBS9APGQPEksFesCiihtwBz0J+XgWIJ3lmz7hh05+FlYFz8FM2acwC6RrGS8Guq6jqAK9APFgPF5YRvqu3VJgOXoD8/A8XVlP+rjDysTehzVOdh//gpmjXnZ2gHFYOPox8k+osVhE1N/Cy5fx2EX5fKO2mDhfenD/6B7hz8qID8zJryOLoGcVQB+aVuKrAQ/QDRVzxF+B7eGrM7YTU+9XnrKxZQ7fc26o5Gdw78OaAlZSt0jWEF4fZp1Z2FfnDoKx4FNomYd7uaRtgFTn3++ooz4qVdGpMJfY/qHGweP0WzxnwGXUPwW7GwHWnu8ncr/rU4FFNJcznhbrwsLcBV6M7B0QXk1/b8PDIfytu7FwvLTsXppHctXwXsDTyrPpASm8srKwimpJOwxHTVXwj8q7DsNwvLNnsV5SdMrysgv5S9B/0vwt7xB2BkzKQrZiTwR/TntXe8K2bSJaB89Dm7gPzMBrURukYws4D8UtYB3Il+IMjGlXjwj2EEcCn685uNu0nvzlPRlC8/r19Afm2t6hdvHpS3oi4Rlp2Cg4Bt1AeRcSvwbsJiJZav5YTNnW5TH0jGVoT1P6pM+XjGjwFM7ifoZsBVXhCjC7gf/a/AeszAizEVYTLwIPrzXY/7qPYPKeUCaD8sID+zAd2D5uKv+pKYB6Hv/OvxFOGzNSvGRqS1TsD74qabNOUS6HcUkJ9Zv1ZH9/nZFQXkl7Ib0Xf8NcK30F7kp3i7o12ONhs3R841dapVAVcSJiDWoirfusrDLujq8J+iclOwO7Cz+iB6fBW4Vn0QFXQN8F/qg+ixI9WeBKr6oi7S6Qesgo5H96tjnwLyS9Wf0f/qqxFewvQkWqeTdL4MuCByril7O7p6P66A/Mz6dC6ai77Kt742II1bv0/jXf1SMIXwDob6eugGNoyca6pWR9cmf1VAfm3Lv16GZitRuXcDL4rKVjuKcOtPqQYcCjwjPg4LKy0eTjgnSp3AkeJjUHmB8EWOwtaicq3iRqLbDKOqn78MA55E/2vvf2Mnak37JfrrYjb6yanKj9HU+XLCIlFmhdoeXUdzSAH5pehd6Dv55/EGPymaStiqV3197Bc70UQdhq7OfRegRX4E0DrV7X+AG4RlK31YfQCEFz+9wU965hK+yFA7Qn0AItcJy/YEwAp3KprZ7vwikkvQeGAJ2l93t1LdW7xl0AnchPYaWUx1F+iaj6bOv11Ecu3IdwBap5p13iUqV21/YLT4GI4mvO1taVoFfFZ8DGOAd4iPQeVeUbm+A9AiTwBa9wZRufeIylVTv/dwKeHXpaXtevSrZB4sLl9F1TcpH8daBY1Fd4uxip8ajQOWob21u3v0LC0ve6K9VpYQ7gRUzVFo6nsV1azvIfMdgNZMF5Z9t7Bslb0Jn12q3EBYetbK4Wq0yzOPJkxCqkZ1B6CDsECYNckTgNZME5XbjW7BDaW3i8tPZc15a9y3xOWrr1mFewi/xhWmicotNU8AWqO6AzCDcHuxav5VWPbthOf/Vi6XAHcKy6/iBGAx8JiobOVd2dLyBKA1G4rKfVBUrtLmaGf3ZwrLttbV0J67jYFNhOWrPCAq1xOAFngC0BrVxTZTVK6S8uW75cDvhOXb0PyWcA5VdhOWrTJLVO40Ubml5glAa1QTgFmicpXeLCz7IuA5Yfk2NM8THgWoKK9dFdWPFN8BaIEnAK2ZJiq3incAlJ3oOcKyLR+/FJZdxQnALFG500TlWsWshu774qoteDGF8Faxoq6fBYbHT9EiG0m4i6P6Pn1S/BSTsi26/rGqSzC3zHcAmjdVWPYsYdkK2xO+8VW4kLDds5Xby4RHOQodhGu4SpR3Kb1LZ5M8AWjeRFG584FForJVthGWfaWwbMuX8lxWbZ36FwjbMiuo+ubS8gSgeaqL7HFRuUrKzvNqYdmWr8uFZVftsR3o7lRW7XHLkHkC0DzVRfaMqFwl1QTgAWCOqGzL3xzgYVHZVZwAzBWV6zsATfIEoHmqCUDVPkfrAjYTlX2VqFyLR/UYYAuq18+q+irfAWhS1S7MPCjfAaiS9YARorL9/L/9qM7pKGBtUdkqqr7KdwCa5AlA83wHoBjThGXfJCzb4rhZWPY0YdkKvgNQEp4ANM93AIqhWtnreeBJUdkWzxPAQlHZVVulzncASsITgOatKSr3eVG5KqoNl1R7mltcNeBeUdlVmwCo7gB4AtAkTwCaN1ZU7jxRuSqq56aqt8UtvhmictcSlauiugMwRlRuaXkC0DzV8rAviMpVUc3mZ4nKtfhUq9RV7Zep6lHLSFG5peUJQPNUF9nLonJVPAGwvKkmAFV7OU3VV6m+GiotTwCa5wlAMVSdphcAal9Pi8qt2h2A5aJyfQegSZ4ANE81y1Q1KpUJonKr9rJllaheTltDVK6K7wCUhCcAzfMEoBiq2XzV1luoEtW5HSUqV0U1AfAdgCZ5AtA8PwIohqqeXxKVa/Gpzm3VfpmqfqxUrZ6HzBOA5vkOQDFcz5Y3/zIthuu5JDwBaJ4HpmK4ni1vHpiK4XouCU8AmtchKrcmKtfMzNqQJwDN8/OtYrieLW9+f6cYqnr23bsmeQLQvBWicqs2MHkCYHnzBKAYfnxXEp4ANE91kamWIFZRdZrjROVafKpzW7WByROAkvAEoHm+A1AM1QSgaqu2VYnq3C4Tlaui6qtUfXNpeQLQPN+aLsYCUblVW7e9SiaLyq3a6pK+A1ASngA0z+tcF0O1alvVtm6tkqmicj0BKIbvADTJE4DmqSYAq4nKVVHtKT5NVK7Ft5Go3HmiclVUfVXVXrYcMk8AmveiqNyqbSiiugMwXVSuxac6t1XbX2JNUbkviMotLU8Amqd6Nl21CcAzonI3E5Vr8W0qKneuqFwVVV+l6ptLyxOA5i0UlauaVas8Lip3a3SrPVo8HcBWorJnispVUfVVqr65tDwBaJ7qIqvaHQBVpzkBWF9UtsUzDd2z6apNAFR9lScATfIEoHl+BFAMZae5k7Bsi2NHYdmzhGUr+BFASXgC0Dw/AijGU+i+uNhLVK7Fs7eo3GXA06KyVfwSYEl4AtA81QRgXVG5Kt3Ag6KyPQFoP6oJwP3AKlHZKqq+yncAmuQJQPNUi3qsJypX6W5RuVtQvQlXO1sf3RcAqmtYyROAkvAEoHlPicqt4gTgHmHZewrLtnypfv2D9hpWUb1E+6So3NLyBKB5qgnABGC8qGwV5a8n5aBh+VKey3uFZSso+ylV32wVMgxYCdQE8boC8kvJFMLzU0Vdz6N6GzC1o5GEx3aKa2gV1dtc6g1o6nol0FVAfm3FdwCatxLd2t5VewzwLDBDVPYkYD9R2Zaf/dF9lvYguj0tVFR91NOEF4etCZ4AtEZ1q2kDUblK1wnL/pCwbMuH8hwqr10V1fN/3/5vgScArVFdbKo3mZWUneg7gYnC8m1oJgL/Kiy/ihMA1V4afgGwBZ4AtEY1AdhcVK7StcKyRwAHCcu3ofkA2vc4lNeuimoC4DsALfAEoDVPiMqt4gTgIbTLAn9UWLa1rgP4N2H5j/RE1agmALNF5ZaaJwCtUTXsTajmm65/E5a9PdrbyNaa/YBtheVfIixbZRiwkahs1cvCpeYJQGseFpU7AthQVLaScgIA8DVx+da8L4vLV1+zCtPRPXLxBMAKMwbd9+lvLyC/1IwjbKqiqO967BE9S8vL3mivlSWEPqJq3oGmvruBUQXk13Z8B6A1S9C9dVq1xYAAXgIuFR/D8eLyrXHqc3UJoY+oGtU7SrMJPxCsSZ4AtE71HoDyuabSeeLy3wrsIj4GG9yu6Jdx/p24fJXtROWqHsmWnicArVNddFWdAPwZWCw+hh9SzZcwy6IL+IH4GJYAfxEfg4pqAuDn/y3yBKB1qotuS6r5vGsx+herdgA+Lj4G69/R6Aahur+gn6gqjEb3CMATACuc6oWXGmEgqqL90b7cVQNeANaOnag1bSphP3j19VHFl3QBdsR1bhWyHroLvqqL03QRFmFSd/K/iJ2oNe3X6K+L2VT3EdHH0NW7J+Qt8iOA1j2Jbqevqr4H0A2crT4IwgYzb1EfhP2ftxKW/VU7i+ruSKd69DKPsBOgWeGuQDPjreImI3XrE7ZkVv/aewZYK3KuNrgpwBz010M31Vykq+5GNPV+WRHJtSvfARiau0Tlbo92kxOl2aTxlvVU4DdU95ZvCjqBX5HGLeA/A4+rD0JkJLq7kneKyjXjw+h+cbyxgPxStRv6X3z1UC86U2UnoD//9XhT3FSTtiu6ev9gAfmZ9WlbdBf+sQXkl7Ib0Hf6NcKtX/XCM1W0B2k8CqoBN0XONXVfRFf3byggP7M+jQBeRnPh/76A/FJ2IPqOvx5Po9sFrYo2AeaiP+/1OCBuusn7E5p6XwYMLyA/s37diebin1NEcgnrAu5H3/nX4xH8UmARJgMPoT/f9bgXv0ulmozdWkRyZgP5CbrOZ3oB+aXsIPQDQDbuAiZEzbjaVgNuQ3+es1H1X/+boqv7HxaQn9mAPoyuARxWQH4p6wDuQD8IZOMqwlvRlq8RhE++1Oc3G3fjX/9HoKv/Q+OnZzawzdE1gDMKyC9170Y/EPSOP+JJQJ5GAhegP6+9Y/+YSZfEmejqf+MC8jMbUAdhNSpFA1BtSZyaq9EPBr3jKsItaxuaccCl6M9n77gyZtIlMhNN/c8tIjmzRlyMriOq+nsAED7HTOWTsGzcDawTMe92N5X0nvnXCNfaNhHzLgvl8/8/FZBf26v686u83CAsex9h2am4E/i5+iD6sBVwLaGjtOZMB/5JWPUyNT9FtwpoVtNyUQAAHkFJREFUSpR9j7LPNXuVt6CbCZ9bQH5lMIU0toPtK54mLFxjjdmLtL7zz8bzhE8RLaxFojoPuxeQn1lDxqO7BT0P38mpOwr9ANFfrCQsXeu9A/rXARxHmo9z6nFktOzLpQt4Ds05WA6MjZ+iWeNuRtcpqbbiTE0HcDn6QWKguJI0Nq9JzWTgb+jPz0BxFeEaM9gR3Xmo8m6oufIvx/wo3wr2ewBBDfgEsFR9IAPYi/Bim8/ZK95KeGFyX/WBDGApr9xhsvDYU+UqYdlmfdoX3Yz46vjplcrn0P9aHCxWAb8kvOleVWsDv0Z/LhqJqm++1du16M6FN9+y5IwhbE6haBArgYnxUyyNTtJ/FFCPhcAxVOvdgE7g3wm5q+u/kbgM3y3NWhPdexpLgdHxUzRr3jXoOikvi/lq6wLz0Q8ejcZtVGNP+V1Jb/nmgWIeXsuhtw+hOx9XFJCfWUtOQNcwfhM/vdI5AP0A0mz8HdgzQl2o7UXovNX120ysIiw1ba92HrpzcnwB+Zm1ZHd0DWMh3hu7L6ehH0haiesIa82X/a3zfYDr0ddnK3FKhPoou+Fo19vYJX6KZq0ZAbyErnHsGT3D8hlGmnsFNBp3AJ+kXO94TCIcc5lu9feOKwnXjr2actGzF/GPHEuccl+AUwvIr4ymArPRDypDiZWExwOHE144Tc1Iwh2L3wEvo6+vocQcvFZDf5R31C4sID+zITkaXQOZUUB+ZbUTsBj94JJHPAecTZgMrJdjHTVrvZ5j+AVhiVx1veQRiwmL3FjfHkF3bj5eQH5mQ7IB2g5s2/gpltZ7gW70g0ze8RDwY+BAYFpeldWHacBBwE+Ah4X5xoqV+KW/geyA9vxsGD/FavEzrvw9AdwHvF5U/oGE3fHstS4APk+4jdlONuuJ+i+kF4B7CHeEZgKzCLe15xPuHiwmDHaLev778YS+YBzhXYOJhE/fphF25dsMeAOweuxExI4F/qw+iIQdKCz7buBxYflmDfs2ulnyowXkV3ano/+16Ugr/P7M4GagOz/fLCA/s1woPwes4c2BBtMBnIF+0HGkEWdT/s8tY/sXtOfozfFTNMuHcqvMGp4tN6KTsHiSevBxaOP3VGsZ5lYp72o+hx9XW8n8Fl2D8WOAxgwnvBegHoQcmrgAf1feKOXb/78uID+zXB2GtnPzY4DGdBE+Y1MPRo5i47d48G+U+vb/B+OnaJavNYDl6BrNyfFTbBtdwJnoByVHMXEOvqXcjO+gO1cvAxPip2iWv0vQNZwn8bPNZnTgrwOqEKfiF/6a0UnoS1Tn6y/xUzSL46NoO7u3xE+x7RxDey4WVPVYCXwaa9a+aM/bR+KnaBbHRGAFusZzdvQM29N7aJ9lgx1hgy6v8NeaX6E7bysIG0uZldblaDu+cfFTbEs7ob316cgnZuO1/Vs1lrBapOrcXRo/xWrrVB9ABfxBWPZYwq9Za97NhH0VrlAfiLXsGsLgf4v6QErqQLQ/IJR9p1kuphKeP3oWXU7DCF9UrEL/a9bReJyBP/MbqivQnb+VwJT4KZrF9w90Dakb7Zax7eK9hM101AObY+CYh5/352FdtD9cfOetAH4EUIzfC8vuxAtp5OECwg6Pl6gPxPp1BeGxjXf0G7oPo/2M2Lf/rW1MQfs1wCP42+e8dBK2FF6C/teuI8QSwla+vsbz0YF257/l+O1/azN/RdtJ7hU/xUrZCPg7+sGv6nEN8LpBzpU1521oz+mF8VM0K9ahaBvVb+KnWDkdhMWeFqAfCKsWzwNH4l/9MZyP9tweFD9Fs2KNAV5E16heBiZHz7KaJgLfR/vSVFWim7CWv98Qj2MSsAzd+X0BGB09SzMB9a5zx8ZPsdK2AP6GfpBs17gK2Kbhs2GtOA7tOT4rfopmGupnaw/iW6ZFeBdwB/oBs13idmD/ps6AtaIDeBjtud47epZmIuqdtWrAbtGzNAid6f54IjCUuA84HH+uXJS90Z7vp/AOptbmTkXbyH4VP0XL6ATeD9yAfkAtS1wPHIAH/qKdi/a8nxI/RTOtbdE2smWE5YmteLsSFhTydsOvje6eunlzy7VrQ7EO4ft75TWwVfQszRJwK9qG9rX4KdoA1iW8bDUT/cCrjqcIey1MH1KN2lCdiPY6uDF+imZp+ATaxjYHGBE9SxtMF/AO4DxgMfrBuKhYTLjdvB9+5puCEcDTaK+Jj0bP0iwRq6Pv8A+JnqU1YyzhnPwRWIp+kM47lvTkdnBPrpaOw9BeG4uA8dGzNEvI2Wgb3XXRM7RWjQb2Idwavw/94N1qPErYlvdA3MGn7Ca018nP4qdolpZd0XfQ/xI9S8vDJsBHCIukPACsQn/t9I5VPcd2JnBEzzFb+nZAf+3sHD1L65MXhdG6D9hSWP7ZhIHFymUSsB1hVbytemJLYGRB5S8D7gfuAe4F7iKsdzC/oPItP78kPAJQuRe//S/jCYDW54DvCstfBmwAzBMeg+Wjg/Ap1/RMTCHsUzCZMGkYD6xGePFuODCu5//7EmG76m7CfhWLCIP5POA5YC4wi/DVwmO88sKYldsU4AmKmzj25TOEfTTMKke98UYN+Hr0LM0sRepP/5YR+kCzyvod2kb4LN59y6xqxhDu8Cj7nl9Hz9IscXugbYQ14OPRszSzlByNvt95U/QszUrgLrQN8VG8IItZVXQBM9D2OXdEz9KsJD6Gfjb+3uhZmlkK3o++vzkyepZmJTGG8La1skHeFD1LM0uBemfK5wl9npn1OA39rNzP5Mza227o+xlv+2vWy8bot4n9Y/QszUzpQrR9TDewUfQszUror+gb5+bRszQzhS3Q/8i4KHqWZiX1DrSNswb8PHqWZqZwDvr+Zd/oWZqVVCf6z3OWAxvGTtTMCjWdsNyzsm95GC8/n5RO9QHYq6wCfiA+huHAF8XHYGb5Og4YJj6G0wkTATPrxxjCRizKmfoywsYyZlZ+awNL0fYpzwFjYydqzfEdgPQsAX4qPoaRwGfFx2Bm+fgiMEp8DD8CFouPwawUpqKfsb9E2EbWzMprImF7Z/UdxbViJ2rN8x2ANM0FzhUfw1jgU+JjMLOhORYYJz6GXwLPiI/BrFTeQHgpUDlzXwhMiJ2omUWxOrAAbR+yCtgydqJm7ehvaBtvDfhK9CzNLIavo+8/Lo6epVmbeiv6BrwAWCN2omaWq9UJm+6o+4+9Yidq1s7uQN+IT4idpJnl6kT0/cZt0bM0a3OHoW/IC/FdALOymAi8gL7fOCR2ombtrgv98sA14BuxEzWzXHwTfX/xCPqVB83awsfQN+hFeF0As9RNAl5E318cGTtRs6oYCTyJvlF/K3aiZjYkp6DvJ2YDI2InalYlx6Jv2C8BU2InamYtmYx+1b8aXkDMLHdjgWfRN+7vxE7UzFryPfT9w1zChmZmlrOvoG/gS4H1YydqZk1Zl7CRmLp/+FLsRM2qKoWlPWvAGbETNbOmnIm+X/DS4WaRpfCJz0pgi9iJmllDNgdWoO8XToydqFnVTSHsq61u7L+LnaiZNeT36PuDlwifIJpZZN9F3+BXATvHTtTMBrQj+l1Da8DJsRM1syCVxT6uip2omQ3ocvT9wCL8ebBZob6NvuHXgH1iJ2pmfXob+vZfA06KnaiZvdpE0rgLcAvQETlXM3u1DuBG9O3fS4SbiaTwRUANODB2omb2Kgehb/c1/Oa/mcyapLHt58PA8Mi5mlkwgtDm1O3e24SbiX0DfUdQA46JnaiZAfAZ9O29Bnw9dqJmNrAJwPPoO4PnCe8lmFk8awDz0bf3BfjXf+l1qg/Ahmwh8AP1QRA6gy+rD8KszX2VNCbapxImAWYmtjrwHPpfBcuAjSLnalZVGwMvo2/n84HVIudqZk34IvqOoYaXCDaLJYUlf2vAsbETNbPmjAKeQN851IBdI+dqVjW7kMaSv08CoyPnamYtOAp9B1EjLFDixYHM8tEBXIe+XdeAIyPnamYt6gLuR99J1ICDI+dqVhUfQN+ea8CDwLDIuZrZELwffUdRA2YSHkuYWetGEdqSuj3XgAMi52pmQ9QB3Iy+s6gBX4icq1m7Ow59O64BN+HHemalsAf6DqNG2Kxo7ci5mrWrqYR1PtTtuAa8JXKuZpajy9B3GjXgrNiJmrWps9G33xpwaeQ8zSxnO5DGZ0PdwE6RczVrNzsQ2o66/a4Cdo6cq5lFcB76DqQG3ICfH5o1qpPwzF3dbmuEPsTMSmg6YXledSdSAw6PnKtZu/gI+vZaIyw7vHHkXM0sou+g70hqwDOEPQvMrH/jgTno22sN+HbkXM0ssgnAPPSdiTsUs8F9F307rRE2F1szcq5mVoBPoe9QaoRbiptHztWsrDYhnUd2R0fO1cwKMgy4D32nUgP+EjlXs7L6K/r2WSMs+Ts8cq5mVqB3oe9Y6rFf5FzNymZ/9O2yHu+MnKuZCVyFvnOpAQ8BIyLnalYWI4GH0bfLGnBF5FzNTGRb0lhcpAZ8OXKuZmXxFfTtsUboG3aInKuZCZ2NvqOpAUsI6xSYVdkGwEvo22MN+HnkXM1MbF3S6XAuiJyrWeouRN8O6xPy9SPnamYJOBF9h1MPv3BkVfVu9O2vHl+PnKuZJWIc6aw29igwOm66ZskZA8xE3/5qwFPA2LjpmllKjkDf8dTjv+Kmapack9C3u3p8KHKuZpaYDsIuferOp0ZY/cwrBFpVbEo6K/5dj3fqNKukVPYcrwGXRc7VLBWXoG9vNULb3ylyrmaWsLPQd0T1eF/kXM3UDkHfzupxRuRczSxxU4AF6DujGjCb8IKiWTsaDzyJvp3VgOeByXHTNbMy+Az6Dqke34mcq5nK99C3r3p8OnKuZlYSw4C70XdKNWAFsF3cdM0Ktw3h2la3rxphZ1Dv9mdm/2dv9B1TPW4GuuKma1aYLuBW9O2qHnvFTdfMyugP6Dunenwycq5mRfks+vZUj/Mi52pmJbU+sBh9J1UDXgTWi5uuWXTrE65ldXuqEdb7nxY1WzMrtRPQd1T1+GPcVM2i+xP6dlSPr0bO1cxKbjTprFFeA94TN12zaA5A337q8SgwKm66ZtYOUuq4ZhO+nzYrk9VI55v/GmHnQTOzhlyEvtOqx+mRczXL2w/Rt5t6/DVyrmbWZjYEXkLfedUIa5a/MW66ZrnZEViJvt3UCC/+TY+brpm1o6+g78DqcRdevMTSNwy4HX17qceX46ZrZu1qJPAg+k6sHl+Im67ZkH0RfTupx/3AiLjpmlk72wNYhb4zqxFuZ24SN12zlm1KuEbV7aQee8dN18yq4DfoO7N6XA10RM3WrHkdwOXo20c9zombrplVxVTS2TK4BhwVN12zpn0Mfbuox0Jg7bjpmlmVfAp9x1aPF/AywZaOdUhrgvyJuOmaWdV0Ajeh79zqcVHcdM0adgH69lCPW/BOmmYWwb+QzvfNNeDAuOmaDeoQ9O2gHt3ATnHTNbMq+x/0HV095gGT4qZr1q+JwDPo20E9fhA3XTOrugmk1en9b9x0zfp1Dvrrvx5zgNXjpmtmBh9A3+FlY9+46Zq9xtvRX/fZ8OMwMyvMheg7vXrMAsZFzdbsFWOBx9Bf9/W4OG66ZmavtiGwCH3nVw8//7Si/Aj99V6PF4H146ZrZvZan0XfAdajG9g9brpm7Ek6S2PXgE9HzdbMrB+dwA3oO8F6PIYfBVg8Y4AZ6K/zetyMv/k3M6GtgeXoO8N6nBY3XauwH6C/vuuxAtgubrpmZoP7NvoOsR7dwG5x07UKehPh2lJf3/X4Ztx0zcwaMxp4BH2nWI+Heo7JLA9jgIfRX9f1mIGvbzNLyF6k9XLUKXHTtQo5Df31XI9VwD5x0zUza94v0HeQ9egGdo2brlXAG0lr/4ufx03XzKw1E4G56DvJejwIjIqasbWzkcB96K/jeswDJkfN2MxsCD6EvqPMxrfipmtt7Dvor99sHBo3XTOzobsEfWdZjxXAjnHTtTa0M2nd+vdyv2ZWCusCC9B3mvV4AL81bY0bBdyL/rqtxwt4uV8zK5FPoO84s3Fq3HStjXwf/fWajX+Pm66ZWb46gL+j7zzr0U1Yx91sILuS1oI/VxHakplZqUwnrR0DZwLjo2ZsZTaOtBa0WgxsEjVjM7OIjkXfkWbjjLjpWomdhf76zMYxcdM1M4urE7gWfWeajf2iZmxl9DbSWsnyBrzTn5m1gdcBS9F3qvWYA6wZNWMrkwnAbPTXZT2WAVtGzdjMrEBfQd+xZuPXcdO1EjkX/fWYjS/FTdfMrFjDgFvRd67ZOChqxlYGh6C/DrNxBzA8asZmZgLbAMvRd7L1mAesFTVjS9nawHz012E9VgDbR83YzEzoJPQdbTYujJuuJewv6K+/bJwQNVszM7HUdlirAUfETNiSdCT66y4b9wAjomZsZpaA7UnrUcALwIZRM7aUTCOcc/V1V48VwL/ETNjMLCWpPQq4Ai+5WgWdwJXor7ds/FfUjM3MEjMCuBt955uNT0bN2FJwDPrrLBt34lv/ZlZB25LWo4DFwGZRMzalzYEl6K+zeqwAdoiasZlZwk5E3xFnw0uwtqdhwI3or69sfC1qxmZmiUtxgaAvR83YFI5Hf11lwwv+mJkRFgh6GX2nXI+Xga2jZmxF8vVlZpawr6PvmLPhl7PawwjgLvTXUzaOj5qxmVnJDAduR985Z+P/Rc3YivBN9NdRNm4hPPYyM7OMLUlr2+BuYPeoGVtMbwZWor+O6rEM2CpqxmZmJZbatsGPAatFzdhiGAfMQH/9ZMPb/JqZDWAY4TapurPOxllRM7YY/hf9dZONG/GtfzOzQb2OtBZsqQEHRs3Y8vRe9NdLNhYTFiEyM7MGfBp9x52NeYT94y1t6wDz0V8v2Tg6asZmZm2mA7gEfeedjcvwhkEp6wD+iv46ycbf8TVjZta0dYHn0Hfi2fCGQelKbaOfBcD6UTM2M2tjH0TfkWdjKf6UK0Vbkt57I4dEzdjMrALOQ9+ZZ+N2vEpgSkYS1tZXXxfZ+EPUjM3MKmINYDb6Tj0b34yasTXjFPTXQzaeAtaMmrGZWYW8DViFvnOvRzewZ8yErSG7kdZqf6uA/aJmbGZWQT9B38Fn4wnC3QnTWB2Yhf46yMaPYiZsZlZVY4GH0Hfy2fhF1IxtIL9Gf/6z8QhhCWIzM4tgF9K65VsDDo6asfXlfejPezZWAG+MmrGZmXES+g4/GwuADaJmbFkprg9xYtSMzcwMSHPDIK/4VoxO4Ar05zsb/izUzKxAKS788pmoGRvA59Gf52wswwtDmZkV7nPoB4Deg8HWUTOuttcTVmJUn2dP+szMxDqBK9EPAtm4FxgVM+mKGgnchf78ZuMawjVoZmYC6wHPox8MsnFK1Iyr6Xvoz2s2FgIbRs3YzMwGdQT6ASEb3cBeMROumH0Idao+r9n4cNSMzcysYeejHxSy8SReDz4PawCPoz+f2fhT1IzNzKwpk4Cn0Q8O2fCOcEOX2k6QzwJTo2ZsZmZN2x/9ANE7joiZcJs7Cv356x3vjJqxmZm17Cz0g0Q2XgI2i5pxe9oYeBH9+cvGT6NmbGZmQzIWmIF+sMjGLcDwmEm3mWHAjejPWzYeA8bHTNrMzIYutT3ia8A3ombcXr6J/nxlYyWwa9SMzcwsN6kNIt3AnjETbhMpTt7+X9SMzcwsVyneRn6C8Fmb9W0CMAv9ecrGrXijHzOz0tmE9F4kOz9qxuX2W/TnJxsvAZtHzdjMzKL5d/QDSe84LGrG5XQE+vPSOz4aM2EzM4svtVUCFxHuTliwEfAC+vOSjQuiZmxmZoWYBMxBP6hk41rCewpVNwy4Hv35yMYzwJSYSZuZWXHeBqxCP7hk4+tRMy6HE9Gfh2ysAvaLmrGZmRXu++gHmGysAHaJmnHa3kx6n/ydFjVjMzOTGAnchX6QycZjwGoxk07U6sBM9PWfjXuB0TGTNjMzndcDS9EPNtn4RdSM0/Qr9PWejWXA1lEzNjMzuWPRDzi94wNRM07LYejru3ccEzVjMzNLQgfwV/SDTjYWAhvGTDoR6wPPo6/vbFxGuCbMzKwC1gHmox98svFPoCtm0mKdwNXo6zkb84C1I+ZsZmYJei/6Aah3HB81Y62voq/f3vGeqBmbmVmyzkQ/CGVjBfDGqBlr7AgsR1+/2TgjasZmZpa0scBD6AejbDwCjI+ZdMHGAQ+jr9d2rmMzM2vBDqT36/SsqBkX6xfo6zMbK4Cdo2ZsZmalkeLz6YOjZlyM96Gvx97xn1EzNjOzUknxDfUFwAYRc45tPeA59PWYjXb/0sLMzFqQ4jfq11DOAasTuBJ9/WVjITAtYs5mZlZiH0I/UPWO46JmHMfx6OutdxwaNWMzMyu936AfrLJRtpfWUnyp8ldRMzYzs7YwAXgc/aCVjYcInyymbhwwA319ZWMWYfdBMzOzQe1GenvV/zRqxvn4Ofp6ykY3sGfMhM3MrP2chH4A6x0HRc14aA5AXz+948SoGZuZWVsaBtyAfhDLxvOk+WnguqT3yd/NwPCYSZuZWfvaGHgR/WCWjasJn9mlohO4An29ZGMRsGnMpM3MrP0diX5A6x2fj5pxc76Mvj56x+FRMzYzs8r4LfpBLRvLCTvsqe0AvIy+PrLx+6gZm5lZpUwgfE6mHtyyMYPw2Z3KWODBPo5LGbOBNWMmbWZm1ZPip4E/jprxwM4c4LgU0Q3sFTVjMzOrrG+hH+h6x7ujZty39w7heGPFN6JmbGZmlTYMuBH9YJeNecA6MZPuZV1gfoQ8hhK34E/+zMwssk0Jn5mpB71sXAZ0xEy6R6qf/G0SM2kzM7O6f0M/8PWOY6JmHHxemF9/cUTMhM3MzHo7F/3gl41lwNYR8309sDSBPLPhT/7MzKxwKe4aeC8wKkKuI4G7EsgvG/7kz8zMZHYnvU8DT4mQ5/cSyCsb3cDeEfI0MzNr2MnoB8SYg+M+wKoE8srGSTnmZ2Zm1pLhpPdp4JPkc3t8AvBEAvlk41ZgRA65mZmZDdkmpLdrYB4vyKX2ouNLwOY55GVmZpabo9APkL3jg0PI58MJHH/vOHII+ZiZmUVzHvpBMhsLgQ1byGM68EICx5+NP7SQh5mZWSHWIL1PA/8JdDWRQydwdQLHnY0ngYlN5GBmZla4PUjv08Djmjj+/0zgeLPhT/7MzKw0voN+4MzGy8D2DRz39j3/rfp4s3FyA8dtZmaWhJHAHegHz2zcD4we4JhHAfckcJzZuB1/8mdmZiWzBbAE/SCajR8McLw/SuD4srEUeMMgdWxmZpakT6EfSLOxCnhHH8e5L+mt9vcfDdaxmZlZcjqAv6AfTLMxF5iaOcZJwNMJHFc2/tZTd2ZmZqU1BXgG/aCajT9lju/8BI4nG88CazVZx2ZmZkl6N/qBtXf8G2muXrh/i3VsZmaWpDPQD67ZWNQT6uPIxo9brl0zM7NEjQUeRD/IphozgHEt166ZmVnCdgCWox9sU4sVwE5DqFcza1Iz64Ob2dDV37b30rav9hXCRkpmZmZtK8XNdpTR7GZFZmZmpZXidruKWAhMG1pVmpmZlcvh6AdgdXxwyLVoZmZWQr9FPwir4vwc6s/MzKyUJgCPox+Mi47ZwJo51J+ZmVlp7Q6sRD8oFxXdwF651JyZmVnJfQf9wFxUnJxTnZmZmZXeSOAO9INz7LgdGJFTnZmZmbWFLYEl6AfpWLEUeENutWVmZtZGPoV+oI4V/5FjPZmZmbWVDuAS9IN13nFxT25mZmbWj7WB+egH7bxiPrBWrjVkZmbWpg5BP3DnFQflXDdmZmZt7Vz0g/dQ4ze514qZmVmbm0BYMU89iLcac/Bqf2ZmZi15G7AK/WDeSuwXoT7MzMwq40z0g3mzcUaUmjAzM6uQscAj6Af1RmMmMD5KTZiZmVXMroRNdNSD+2DRDewZpwrMzMyq6XvoB/jB4tRo2ZuZmVXUSOBe9IN8f/EAMDpa9mZmZhW2PbAc/WDfO1YAO0XM28zMrPJORD/g944TYiZsZmZmMAy4Gf2gX4/bgeFRMzYzMzMAtgCWoh/8lwFbRc7VzMzMMr6AfgLwuehZmpmZ2at0AlejG/yvA7piJ2lmZmavNR14keIH/5eATQvIz8zMzPrxcYqfAHyskMzMzMysXx3AXylu8L+sp0wzMzMTWwd4jviD/wJg/YJyMjMzswYcTPwJwMGFZWNmZmYN+2/iDf4/KDAPMzMza0IX8GvyH/zPJ6xAaGZmZokaRvi1ntfgfzoe/M3MzErjIOBpWh/45wDvK/yozczMbMhWB74KzKXxgf8Z4Cs9/18za1P+ltesGoYDewHvALYDNgHW6PnfFgAzgDuAiwnLC68o/hDNrEj/HwUoVr6eU26sAAAAAElFTkSuQmCC"
                            style={{ height: 14 }}
                          />
                        </View>

                        <Text
                          style={{
                            fontSize: 10,
                            marginTop: 3,
                            marginLeft: 5,
                          }}
                        >
                          Block C, Road 2, House 38, AftabNagar, Dhaka
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      margin: "15px 15px 3px 15px",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          marginTop: 5,
                        }}
                      >
                        Product
                      </Text>
                      {products.map((product, i) => (
                        <Text
                          style={{
                            fontSize: 10,
                            marginTop: 5,
                          }}
                          key={i}
                        >
                          {product.name}
                        </Text>
                      ))}
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          marginTop: 5,
                        }}
                      >
                        Qty
                      </Text>
                      {products.map((product, i) => (
                        <Text
                          style={{
                            fontSize: 10,
                            marginTop: 5,
                          }}
                          key={i}
                        >
                          {product.quantity}
                        </Text>
                      ))}
                      <Text
                        style={{
                          fontSize: 12,
                          marginTop: 10,
                        }}
                      >
                        Sub Total
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          marginTop: 8,
                        }}
                      >
                        Grand Total
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          marginTop: 8,
                        }}
                      >
                        Due Amount
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          marginTop: 5,
                        }}
                      >
                        Price
                      </Text>
                      {products.map((product, i) => (
                        <Text
                          style={{
                            fontSize: 10,
                            marginTop: 5,
                          }}
                          key={i}
                        >
                          {product.price}
                        </Text>
                      ))}

                      <Text
                        style={{
                          fontSize: 12,
                          marginTop: 10,
                        }}
                      >
                        1600.00
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          marginTop: 8,
                        }}
                      >
                        1600.00
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          marginTop: 8,
                        }}
                      >
                        1600.00
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      margin: "15px 15px 3px 15px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        marginTop: 8,
                      }}
                    >
                      Thanks for you order
                    </Text>
                  </View>
                </View>
                <Text
                  style={styles.pageNumber}
                  render={({ pageNumber, totalPages }) =>
                    `${pageNumber} / ${totalPages}`
                  }
                  fixed
                />
              </Page>
            </Document>
          }
          fileName={`Black-${data.id}.pdf`}
        >
          {({ blob, url, loading, error }) =>
            loading ? (
              <p className="text-decoration-none text-clr-red fw-bold">
                Loading ...
              </p>
            ) : (
              <>
                <button className="secondary-btn fs-12 py-1">Download</button>
              </>
            )
          }
        </PDFDownloadLink>
      )}
    </div>
  );
};

Font.register({
  family: "Ubuntu",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf",
    },
    {
      src: "https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf",
      fontWeight: "bold",
    },
    {
      src: "https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf",
      fontWeight: "normal",
      fontStyle: "italic",
    },
  ],
});

export default Invoice;
