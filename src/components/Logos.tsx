import React from "react";
import { Badge } from "@/components/ui/badge";

export function QrbtfLogo(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <div className="flex">
      <div className="self-center mr-2">
        <Badge>Logo</Badge>
      </div>
      <div>
        <h1 className="scroll-m-20 text-[1.5rem] font-extrabold tracking-tight ">
          Qr-Code AI
        </h1>
      </div>
    </div>

    // <svg className="svg" height="100%" viewBox="0 0 120 38" {...props}>
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M0.0908012 0.164467H53.5824V37.4214H24.6754L20.3464 30.8568C21.6578 30.1892 22.6831 29.2593 23.4223 28.067C24.1853 26.8748 24.5668 25.4799 24.5668 23.8823V13.4742C24.5668 12.2582 24.3522 11.1613 23.923 10.1837C23.4938 9.2061 22.8858 8.37154 22.0989 7.68005C21.3121 6.96473 20.3583 6.4163 19.2376 6.03479C18.1407 5.65328 16.9128 5.46252 15.5536 5.46252C14.1945 5.46252 12.9546 5.65328 11.8339 6.03479C10.737 6.4163 9.79521 6.96473 9.00835 7.68005C8.22148 8.37154 7.61344 9.2061 7.18424 10.1837C6.75504 11.1613 6.54044 12.2582 6.54044 13.4742V23.8823C6.54044 25.0984 6.75504 26.1952 7.18424 27.1729C7.61344 28.1505 8.20954 28.997 8.97258 29.7123C9.75944 30.4038 10.7013 30.9522 11.7981 31.3576C12.895 31.7391 14.111 31.9298 15.4463 31.9298L19.0955 37.4214H0.0908012V0.164467ZM18.2004 26.3502C17.5566 26.9463 16.6743 27.2444 15.5536 27.2444C14.4329 27.2444 13.5388 26.9463 12.8711 26.3502C12.2273 25.7303 11.9054 24.9076 11.9054 23.8823V13.4742C11.9054 12.4489 12.2273 11.6382 12.8711 11.0421C13.5388 10.4222 14.4329 10.1122 15.5536 10.1122C16.6743 10.1122 17.5566 10.4222 18.2004 11.0421C18.868 11.6382 19.2018 12.4489 19.2018 13.4742V23.8823C19.2018 24.9076 18.868 25.7303 18.2004 26.3502ZM42.0752 6.39246C40.9546 6.01094 39.6908 5.82019 38.2839 5.82019H29.7V31.5722H35.0292V21.5575H37.6759L42.0395 31.5722H47.7621L42.8263 20.6991C44.257 20.0791 45.3776 19.1731 46.1884 17.9808C46.9991 16.7886 47.4044 15.358 47.4044 13.6889C47.4044 12.4728 47.1898 11.3879 46.7606 10.4341C46.3314 9.45646 45.7234 8.63383 44.9366 7.96619C44.1497 7.2747 43.1959 6.75012 42.0752 6.39246ZM38.2839 17.4443H35.0292V10.291H38.2839C39.4285 10.291 40.3346 10.6248 41.0022 11.2925C41.6937 11.9363 42.0395 12.8185 42.0395 13.9392C42.0395 15.0122 41.7056 15.8706 41.038 16.5144C40.3703 17.1344 39.4523 17.4443 38.2839 17.4443ZM59.2547 5.8202H67.8744C69.2097 5.8202 70.4139 5.97519 71.4869 6.28516C72.5598 6.59515 73.4659 7.03627 74.2051 7.60852C74.9681 8.18079 75.5523 8.87228 75.9577 9.68299C76.363 10.4937 76.5657 11.3998 76.5657 12.4013C76.5657 13.9988 76.1127 15.2864 75.2066 16.264C74.3243 17.2417 73.0963 17.802 71.5226 17.9451V18.3385C73.2394 18.4577 74.5866 19.03 75.5642 20.0553C76.5419 21.0806 77.0307 22.4278 77.0307 24.0969C77.0307 25.2415 76.8161 26.2787 76.3869 27.2086C75.9815 28.1147 75.3854 28.9016 74.5986 29.5692C73.8355 30.213 72.8937 30.7138 71.773 31.0714C70.6761 31.4053 69.4482 31.5722 68.089 31.5722H59.2547V5.8202ZM64.4408 20.3772V27.2802H67.8744C69.0666 27.2802 69.9847 26.9821 70.6285 26.386C71.2961 25.7899 71.6299 24.9434 71.6299 23.8466C71.6299 22.7497 71.2961 21.9033 70.6285 21.3071C69.9847 20.6872 69.0666 20.3772 67.8744 20.3772H64.4408ZM67.8029 16.0852C68.8282 16.0852 69.6389 15.811 70.235 15.2626C70.855 14.7142 71.165 13.9869 71.165 13.0808C71.165 12.1747 70.8669 11.4594 70.2708 10.9348C69.6747 10.3864 68.852 10.1122 67.8029 10.1122H64.4408V16.0852H67.8029ZM79.6992 10.8275V5.8202H98.6556V10.8275H91.8599V31.5722H86.4949V10.8275H79.6992ZM119.207 5.8202H102.397V31.5722H107.762V21.2714H118.277V16.264H107.691V10.8275H119.207V5.8202Z"
    //     fill="currentColor"
    //   />
    // </svg>
  );
}

export function MidRealLogoFull(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 1400 262" {...props}>
      <path
        d="M246.209 16.2245C224.657 -5.31523 189.433 -5.31524 167.881 16.2245L92.3975 91.6954L170.726 169.977L246.242 94.5064C267.762 72.9666 267.762 37.7643 246.209 16.2245Z"
        fill="#D81420"
      />
      <path
        d="M16.8815 167.166C-4.67112 188.706 -4.67112 223.908 16.8815 245.448C38.4341 266.988 73.6575 266.988 95.2101 245.448L170.726 169.977L92.3975 91.6953L16.8815 167.166Z"
        fill="#1A25E5"
      />
      <path
        d="M576.596 248.946V250.482C567.897 250.057 558.903 249.861 549.582 249.861C538.2 249.861 527.931 250.057 518.839 250.482V248.946C525.249 248.129 529.501 246.919 531.561 245.383C533.622 243.847 534.668 241.396 534.668 238.094C534.668 236.852 533.851 231.459 532.183 221.948L506.705 74.4705L437.73 247.41H436.193L364.733 75.4184L341.741 207.991C340.073 217.306 339.256 224.562 339.256 229.727C339.256 235.512 340.4 239.859 342.657 242.768C344.946 245.677 349.067 247.736 355.085 248.979V250.515C345.96 250.09 335.723 249.894 324.342 249.894C319.371 249.894 312.535 250.09 303.836 250.515V248.979C311.914 246.919 317.768 242.768 321.399 236.558C325.029 230.348 328.169 219.692 330.883 204.592L365.354 19.5588H366.924L443.029 205.539L518.512 19.5588H520.049L557.333 225.706C558.772 233.584 560.734 239.042 563.22 242.147C565.705 245.252 570.153 247.508 576.596 248.946Z"
        fill="currentColor"
      />
      <path
        d="M633.732 248.946V250.482C624.607 250.057 616.856 249.861 610.446 249.861C604.036 249.861 596.252 250.057 587.16 250.482V248.946C592.327 247.9 595.859 245.841 597.724 242.735C599.588 239.63 600.503 232.276 600.503 220.705V127.552C600.503 121.538 599.98 117.583 598.966 115.589C597.92 113.628 595.238 112.026 590.888 110.784V109.248C602.27 108.431 612.114 106.143 620.388 102.417V220.705C620.388 232.309 621.304 239.63 623.168 242.735C625.032 245.841 628.564 247.932 633.732 248.946ZM623.168 67.345C623.168 70.254 622.121 72.7381 620.061 74.7973C618.001 76.8564 615.286 77.9024 611.983 77.9024C609.072 77.9024 606.587 76.8564 604.526 74.7973C602.466 72.7381 601.419 70.254 601.419 67.345C601.419 64.0437 602.466 61.3308 604.526 59.2716C606.587 57.2124 609.072 56.1665 611.983 56.1665C615.286 56.1665 618.001 57.2124 620.061 59.2716C622.154 61.3308 623.168 64.0437 623.168 67.345Z"
        fill="currentColor"
      />
      <path
        d="M803.373 238.715L804.289 240.252C798.271 248.75 790.324 252.966 780.381 252.966C773.971 252.966 769.294 251.561 766.416 248.782C763.506 246.004 761.543 241.494 760.529 235.283C749.769 247.083 735.575 252.966 717.98 252.966C697.474 252.966 681.285 245.873 669.348 231.688C657.443 217.502 651.491 200.604 651.491 180.927C651.491 158.146 658.784 139.123 673.403 123.793C687.99 108.464 705.258 100.815 725.11 100.815C737.113 100.815 748.625 104.214 759.581 111.046V38.4511C759.581 32.437 758.796 28.4167 757.259 26.3575C755.722 24.2983 751.928 22.7294 745.91 21.7161V20.1799C761.641 19.134 772.827 16.8787 779.466 13.3486V208.285C779.466 223.19 780.087 232.799 781.33 237.146C782.573 241.494 785.483 243.651 790.029 243.651C794.543 243.684 799.023 242.017 803.373 238.715ZM759.548 217.306V128.827C756.441 122.191 751.47 116.929 744.635 113.007C737.799 109.085 730.539 107.123 722.886 107.123C710.033 107.123 699.371 112.974 690.9 124.676C682.397 136.377 678.178 154.125 678.178 177.92C678.178 196.976 682.724 212.502 691.849 224.497C700.973 236.493 713.5 242.507 729.427 242.507C736.458 242.507 743.261 240.546 749.769 236.623C756.31 232.603 759.548 226.197 759.548 217.306Z"
        fill="currentColor"
      />
      <path
        d="M977.004 248.946V250.809C975.14 251.005 972.556 251.136 969.253 251.136C960.357 250.711 953.784 250.057 949.532 249.109C945.28 248.194 940.309 244.86 934.618 239.173C928.928 233.485 923.695 226.491 918.92 218.221C914.145 209.952 906.819 196.289 896.877 177.234C896.452 176.416 895.372 174.325 893.606 171.023C891.84 167.722 890.401 164.911 889.257 162.656C888.112 160.368 886.607 157.884 884.743 155.204C882.879 152.523 881.113 150.431 879.478 148.993H859.593V220.705C859.593 228.779 860.149 234.793 861.294 238.715C862.438 242.637 863.943 245.187 865.807 246.331C867.671 247.475 870.778 248.357 875.128 248.978V250.515C866.428 250.09 857.434 249.893 848.114 249.893C839.218 249.893 830.191 250.09 821.099 250.515V248.978C825.449 248.357 828.556 247.475 830.42 246.331C832.284 245.187 833.789 242.67 834.933 238.715C836.078 234.793 836.634 228.779 836.634 220.705V53.9765C836.634 43.6151 835.653 36.5878 833.691 32.8616C831.728 29.1355 827.738 26.7494 821.721 25.7362V24.2C828.752 24.6249 838.694 24.821 851.548 24.821C854.851 24.821 860.541 24.7229 868.62 24.5268C876.698 24.3307 881.767 24.2 883.827 24.2C906.819 24.2 924.774 29.9526 937.725 41.4252C950.677 52.8978 957.152 67.8678 957.152 86.3024C957.152 100.161 952.541 112.582 943.318 123.564C934.095 134.546 920.686 141.999 903.091 145.921C905.38 147.588 910.744 156.478 919.247 172.625C927.75 188.772 937.3 204.82 947.995 220.738C958.624 236.656 968.305 246.069 977.004 248.946ZM859.593 142.456H874.506C895.438 142.456 910.09 137.848 918.462 128.63C926.835 119.413 931.054 106.633 931.054 90.2901C931.054 73.0975 926.769 58.9773 918.168 47.897C909.566 36.8166 897.498 31.2927 881.963 31.2927C874.507 31.2927 867.05 32.3386 859.593 34.3978V142.456Z"
        fill="currentColor"
      />
      <path
        d="M1101.58 227.537L1102.82 228.779C1089.77 244.925 1072.57 252.999 1051.24 252.999C1027.63 252.999 1009.41 245.547 996.562 230.642C983.709 215.737 977.299 197.956 977.299 177.234C977.299 155.694 983.611 137.586 996.235 122.91C1008.86 108.202 1024.59 100.88 1043.46 100.88C1059.42 100.88 1072.93 106.045 1084.02 116.406C1095.1 126.767 1100.63 139.907 1100.63 155.825H1003.07C1002.65 159.976 1002.45 163.473 1002.45 166.382C1002.45 190.406 1008.07 209.135 1019.39 222.569C1030.67 236.035 1045.42 242.736 1063.67 242.736C1077.96 242.736 1090.59 237.669 1101.58 227.537ZM1003.72 149.614H1075.18C1074.56 135.527 1071.39 124.577 1065.7 116.7C1060.01 108.823 1052.39 104.901 1042.87 104.901C1033.36 104.901 1025.02 108.986 1017.85 117.158C1010.69 125.362 1005.98 136.148 1003.72 149.614Z"
        fill="currentColor"
      />
      <path
        d="M1245.09 235.61L1245.71 237.146C1239.07 247.704 1231.61 252.966 1223.34 252.966C1217.94 252.966 1213.72 251.168 1210.62 247.54C1207.51 243.912 1205.97 239.206 1205.97 233.42C1192.5 246.462 1177.09 252.966 1159.69 252.966C1147.07 252.966 1137.26 249.665 1130.33 243.03C1123.39 236.395 1119.93 228.321 1119.93 218.81C1119.93 207.631 1124.54 198.283 1133.76 190.7C1142.98 183.15 1155.05 179.358 1169.96 179.358C1184.26 179.358 1196.26 182.758 1206.01 189.589V137.194C1206.01 127.061 1203.85 119.38 1199.5 114.216C1195.15 109.052 1187.89 106.47 1177.75 106.47C1168.43 106.47 1160.19 109.869 1153.06 116.7C1145.93 123.531 1142.13 133.141 1141.71 145.561H1125.88C1127.94 131.899 1134.12 121.047 1144.36 112.974C1154.59 104.901 1166.56 100.88 1180.23 100.88C1210.68 100.88 1225.89 114.347 1225.89 141.247V222.895C1225.89 229.302 1226.54 233.812 1227.92 236.395C1229.26 238.977 1231.58 240.284 1234.92 240.284C1238.35 240.251 1241.78 238.715 1245.09 235.61ZM1205.94 227.243V195.276C1198.91 188.641 1188.97 185.34 1176.11 185.34C1165.55 185.34 1157.27 188.51 1151.26 194.819C1145.24 201.127 1142.26 208.546 1142.26 217.012C1142.26 224.464 1144.75 230.871 1149.72 236.264C1154.69 241.657 1161.62 244.337 1170.52 244.337C1184.19 244.304 1196 238.617 1205.94 227.243Z"
        fill="currentColor"
      />
      <path
        d="M1306.28 248.946V250.482C1297.15 250.057 1289.4 249.861 1282.99 249.861C1276.58 249.861 1268.8 250.057 1259.71 250.482V248.946C1264.87 247.9 1268.41 245.841 1270.27 242.736C1272.13 239.63 1273.05 232.276 1273.05 220.705V38.451C1273.05 32.4368 1272.53 28.4819 1271.51 26.4881C1270.47 24.5269 1267.78 22.9253 1263.44 21.6833V20.1471C1274.82 19.3299 1284.66 17.0419 1292.94 13.3158V220.705C1292.94 232.309 1293.85 239.63 1295.72 242.736C1297.58 245.841 1301.11 247.933 1306.28 248.946Z"
        fill="currentColor"
      />
      <path
        d="M1394.26 125.055V156.284H1354.03V141.625L1336.15 159.471L1354.03 176.679V162.02H1394.26H1400.01V156.284V125.055H1394.26Z"
        fill="currentColor"
      />
    </svg>
  );
}
