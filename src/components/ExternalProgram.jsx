import React from "react";
import "./Program.css";

const ExternalProgram = ({ text, icon, link }) => {
  return (
    <div className="flex flex-col justify-center text-center">
      <a
        className="h-20 w-16"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text == "GitHub" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4rem"
            height="4rem"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        ) : (
          <></>
        )}

        {/* {text == "Resume" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-16 h-16"
          >
            <path
              fill-rule="evenodd"
              d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
              clip-rule="evenodd"
            />
            <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
          </svg>
        ) : (
          <></>
        )} */}
        {text == "Resume" ? (
          <svg width="64" height="64">
            <image
              id="image0"
              width="64"
              height="64"
              x="0"
              y="0"
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAIAAADAAbR1AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0T///////8JWPfcAAAA
CXBIWXMAAABaAAAAWgBwI7h9AAAAB3RJTUUH4AoRETAl8SOyigAABIxJREFUOMu1lF1QlGUYhu/3
3Y/dj110t90VV+Rn3TGEAcSZlNQRpSiVNEcxkmoyUxubtHQCJw/KUHPUnHI0DZvGMG1QG0kbMq0R
DJBWJBHEH1xG25DVZYWFFfbv+3nfDvDIxoNm6jp4Du6D+57n5CKcc845/jfoY/LhyS4AgPowUxAA
e3iH+RDrMZ+1sJMsCxdwBdf/WSRE++VdSiBaKWUq9WJrzAr6rPyyfFpd2nblr7CfjuowFsWesS03
5sW+3321b5NnqNsVSLvXO55Zpo4riQ2QzYKtn3R3NE8c4bJeTmoYFTM2O/V33VM6rl85PECunXVX
eUPtW72akH306tgMYVp8gmGOcFv6VJ6tSppcMoskR3uUC9wKiUyLbuEz4Rqa+OB46IsHdSyf5bLC
RMHQr6+OOSNnhg6EQsFDvrDluu2Ao8T2pb0l2yVINTJVjmo2xv6oZYI4cod4MyxyH1sjNAh2Mtu/
J9gk3QrkRlxq+f3LkUU4wwv4W9F5A9Wh0+1nveekje6GOK1SFmou1lr2j75j3C8Elbregs6R7Y3a
RsM66xYBBZiCDHITWsSJckwdXTPmDf0sba3UGPEpa3dW1O51r1CJkE4L046kuCxhT+r9QrenVbwT
X3XTUTC+W9hlH9TVG4pM34gNukujrKbvzFS5Q7bwCvm2XCHVUzAQMMgYQhTlqEQHNqAcnUIrzUZE
zWGHucCfxlg46U4yl3xNZ5HXiFPzPd1GttJ+QkkRzSOfk9dRhhNkDz+CJij4GU70YTKZihcpKAAK
AwTEgECFCSpEELQA8CANDlBYYYUOGpIOAQJ00LJ53MPXq07Wpa5iTh7Dn4wmSuVsRLA4tI+XSn9G
HfLzZD4WIk2AChUMERiggRYWiADcEMEQhQk2aKBHEd8GDUtTp3ML7+QmPtHxgTlr3Ils0Vw8bv0A
9dk7Vko9ptEJXk2RpXTK8Uhaz9pz9TDBjkUUP+A6/MgjxShCPOzQQoQODHVoQVDYQWvJ3Jm+8aus
tRkzrEf1M1RF3cm8uetS9099aeHirKsLasRCWhqXSQ4SK++gQV4evsjBHMor0MGCCYK2UhNHS6SO
iC3cxKr5ZH0pfLAiASfB4Ke/kEFyKNFoSdEnG5ZoRc0+xPF8vofVkLel4qGoMrbPo+YgrCZHDw3O
9cT1bL5teeBSdysfR5eSu6SN+qnjzTHTza+mxOsaWZ73hXu0t0DKkUvUgySf9JF9fBOuYuBe60Bm
aEp3Tn9lMJ9vIKvIV+d9rrbm7d/+5Cw+emrIH1kWjh34I+ITfutbqEywrtZbktyz5xsXmMtsvWTY
RayMpaq9t+52tXlruk71Thq8Ya4ybjBKn16rUdybxBu6pZrCxCXmT3THIstCJZ21sivKW+snLUoK
pO/NaLfJqZ+lLLbKiRUjy0y7LfE6n65F+y5JQDPmkEdkdwPH/Gn9LHDw0unO7XcvXTzpzhg4nEzM
SeJH6dUJWmOWLf2J5wxNZo1x+YgyfVVsUP8Ousmv8D3WdvwxSEckp9QZZMGuoI89o76nnOecc+7j
/5JHP/jP+RsofXA17G+KpwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNi0xMC0xN1QxMzo0MToxNy0w
NDowMDhY0mEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTYtMTAtMTdUMTM6MzE6MjctMDQ6MDDusXi9
AAAASXRFWHRzdmc6YmFzZS11cmkAZmlsZTovLy9ob21lL2VsYnVsbGF6dWwvLmljb25zL1dpblhQ
L3NjYWxhYmxlL2FwcHMvYm9va3Muc3Zndie9wwAAAABJRU5ErkJggg=="
            />
          </svg>
        ) : (
          <></>
        )}

        {/* <img src="document.webp" className="object-fill h-18 w-16"></img> */}
        <p className="flex justify-center text-white">{text}</p>
      </a>
    </div>
  );
};

export default ExternalProgram;
