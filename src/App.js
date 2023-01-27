import logo from "./logo.svg";
import "./App.css";

// get these working
import AudioPlayer from "react-h5-audio-player";
import { useState, useRef, useEffect } from "react";
import { FaStar, FaMusic, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

// import services_image from "https://photos.app.goo.gl/yDBN8J3aCzXbXNuaA";
const img =
  "https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80";
const im2 =
  "https://lh3.googleusercontent.com/yUe6CGUXtusn5EZmSkFHDBi79WIor9krg2CAt34LFavgFKCfkijvcUFtme8UFmhQHFiY-C52rju0EJUGyvHNGO590tN8DBmvNHyJRklZ5omK3MdbClylOPhIi83Tu3yoRQALoV8vz4SFnBjuG7h0mSAMkS6fUZa7meL3aiqrGkLbHlehKCSPXMMZ6ckBxr_rPanD1G3P5DR50LsbW9AOQkSYKDePcMX7mww86gKun0wkMyoXig-bcfj91pB8cwNLPdN_--60otSOAhUrjR3PXp7vulZDWl6mRW3Ays_Gsfs_SIt7DAcQX68KVkhJL6AqGD0ZHg8urk3DHu4Tccu_nV7m9zFu7zF_WOqebCys99qnmOnf-eBpy86K88AK7AT0EzKT_w1OIoSP8Jg--OhcASCLcW1-Bh6KmRl_HladlnTukwvaZep9_5kiUkDyXoSJk6FGMty2jY5C-mb0KKqE65v9VDTHxk2A4ECh1Yr-vRQw0QlVFb0IGJS0vHDyKHNAosWvb-dgHDrRZIPdUKJ-7CtoYM_CqvpnFlRrNyl5Jwx3GhWK7ZLSRKx2Q_DE8NpiBazjbkgPNaUGF8o4hAkB8dbV43iLUP8wzr3GX5rg6747ZvwEVBsU_GWZn-12npk_Yzn6PB_P9m4ksPZZyQwycQ94VLkW8JVmui5pzWvXoom_QN27wAVGyKUln4ZCrPTlAzH-9pRSXx0ezVZYBUEOEWmlWrxvJua5UTF_BqpMOuG8mn7BvQEIycBHQrvUU9oKpSMFNkfD43vM956120Ga6mEla1hsYvG136EIxUzGXxh0R6TZUyClDE2hDwUbey8FgsJWhA67_dHUTIHDNyb15jQc2BZ8xen4CcVlgYCI7Ee-MvusH0onEy_UlblUCnZM3cXASoDrbSIMibP113W8G1x2KKWM25qjn7Yh-oHqybav2sVX=w420-h630-no?authuser=0";
const im3 =
  "https://lh3.googleusercontent.com/bb5IXMJf_C7Ibky5HzVJozwm6Fj_SnpBE3WOzZQOq17vDINwt2bGdkAHuQ3wiEDBQUfGcHDgJbGxadSuErn41AWbKqI-Btx2fBWoeazu92XNymQ08UUU1IhvXWE7E_iSkQgtB6JO1Pxlo3NHOMCWTV747ypqAa2Lvf9Bk4ytUTkgPjxLUvHA3htvjnHuXAfXfRJVRKNBDVxj7It6GpFRJDrAqIGVRYPSGAiXv7UcE8IfdTL4OcWQACPiJ8KjvR1wTJUGXDeK3zLBMdDiPcqUqkylborxy5EX2MpEKjVSofL2ezE31BJa2BkLcFOXkIWXzC-g3JUn16fq07EpfnGtImZdS5uHSsyQT3pEa0wjUsC1Q_XMpQ_-sPOdkDy4kQHYUcer2IttAM5Oy9Kkk7jgEP8NZZtHx29IcSJ-inzZL71ktf5zEzkPCHodTNqZkRyplpbzFJvAju4E9DU1vKhHU1-aZKfNy1ACJQL54m-JF44y25293ZEDAz8e8VjLM-QHzG0xZfTJAUy1-JD01HiXdBWrcZlte8ReksXEs5C7wjBK2nQgQ9IQO5IA-92MKsu9wJQBv8W355dO-ql6xrXoOWxFcI9UU2ujzULIKJ_m6Ei5BtYc4ZJDwYlX7SHuPl5bx8CiLxXzJ7iagPkGjwcDKPLlqeEyNXmOd5Of0-swNGKq4cUcjhAFAmwozOnMHK5VxdudhEGgAFasiS-BRxQCEUJRZAtBVSMipRmhio1B8dD0GtZKS-G-R7pr9yZGwSUivQbKci-05YnT67y4Eo4hxllO56xPw2gZxlVLWAAYUgY5Zevt3zSCp7casvjIonf8amQP13iHmB3cwn-d1ygiBkrUsuOaNNLrPOBHiZuxSOKeDpvemaXkm2qCy3HajFkD_Np-BhhDufuoOqyGcXzwEyUzy9oad1qSoOPu3ZsktS2a-tJn=w824-h1236-no?authuser=0";

const im4 =
  "https://lh3.googleusercontent.com/F30LHP6gMUq5A45AH8S633SJPkn9t1--Q9CQJbkpPmHsbhReTWR_-i-QUn0OzckrAnPplVMTdAF1_mR6PySWtq06BpaOfFbkZysd_wH7gzMxHVT-Q5i8uopHJNQS8y3z6JmRP-JvCnhuPS_Vxye56LNoWknH6ifC7nAg_grdEDkDPS8uV3G2QElqIGqIGtaM7HWsEzJob93OAeJue7nUUDyi4iRcjSalo-KCPJvpYbJ_S524GaGdDdWeG5hIJnFBey1tDOWYAAKZuTpffcx8QUkJ-ljkwhcvPDnM06b6YPIYBFvFi2NYcxqnVysOe_ABr-2RLr6K5bynsqeDsTFOx49FhwYPeeRf9FBQaBxsdypmJavC8jVPcKz4N-9lHAas4kIHY01mS3ZTg-bgXMe-OTzXu9rsI8GF4sp8PkppXsVoX8NduCZ7CTRBcBkWemS3LbR5BUniIGSlOOuWmyACGhJ1Ip3DcknvLiqw0jgYxj5m6Tpe_OhofZVRv2T0tu7CV-KNOpTN6fZS0S3KTdbVmlo7iJiJBb4Jbf2kaf5sJv4_bRw_htEJ5TW0e47zvuuzLpGav9pWAwY-fj556fXdyEZQ_B2AejMK4nSRDlCTDV_k25CyjRDa4nmk5qrjc4Yd0ZxI_KYnc_053lFH9I_iw-yqqJhk98LJIEjOvUUBY3J46PsEDV-63vTPZlylcEy4fa8mr6ZFljDJkuLgcpI04QmLDy6ZFecv_VpWNSZNT-_J_iqs3OG5G-rkA6dilXTq-yPBEsXsloQSdzGowX1fGVweFDv-CkjQBU6reNjtFaMIRSqQ1bwdvX9C_qKWZLIRlqEaD3jf1fxb3nc_YGuyQ1CXPo3A8ejVB-IhbwhiV6BejUajMOgQz_dmEJtfGo9Oswh8C2A7Hz_JAupzC4e0tz6IT-Njhncu2UR7d2_Ht6F_tmsp=w1114-h1022-no?authuser=0";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React sids practice
        </a>
        <p>new paragraph</p>
        <p>audio files added</p>
        <p>added pics</p>
        <p>added fa icons</p>
        <p>link, audio player all added</p>
        {/* <img src="https://photos.google.com/album/AF1QipNFXjAT5dzD2x_PZVug4u561qMzJwOgmNDlAbea/photo/AF1QipOg9SuXJEtjxk6rP-T6P3LBnNqoALlMnYGb7y2N" /> */}

        <img src={im2} />
        <img src={im3} />
        <img src={im4} />
        <FaCheck />
        <FaStar />
        <AudioPlayer
          autoPlay
          src="http://example.com/audio.mp3"
          onPlay={(e) => console.log("onPlay")}
          // other props here
        />
        <AudioPlayer showSkipControls src={"./assets/audio/song1.mp4"} />
      </header>
    </div>
  );
}

export default App;
