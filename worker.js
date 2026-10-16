const guilds = (env) => [
  { k: 0, id: env.GUILD1_ID, name: "Stellar Crew", admin: env.GUILD1_ADMIN, r: [env.GUILD1_ROLE_MEMBER, env.GUILD1_ROLE_UPPER, env.GUILD1_ROLE_EXEC] },
  { k: 1, id: env.GUILD2_ID, name: "미친놈들의 아지트", admin: env.GUILD2_ADMIN, r: [env.GUILD2_ROLE_MEMBER, env.GUILD2_ROLE_UPPER, env.GUILD2_ROLE_EXEC] },
].filter((g) => g.id);
const B64 =
  "H4sIAAAAAAACA7V9e3cTR7bv//4UFUFACrIsyQ+MbDxDApPJTUiyMDmZc1k+cVtq2wJZ7bTa2BzHWQYEY7BzYgYMBmTHnJgAOc6MMAbMjXNnrdxvMn+6pbXuR7j7UdVd3ZJJcudeFrbV3fXYtWs/fntXdan3jeMfvXP6Xz8+IUadsUJfSy/+EQWjOHI0cs6K4A3TyMGfMdMxRHbUsEumczTyyek/tHZH1O2iMWYejZzPm5Pjlu1ERNYqOmYRik3mc87o0Zx5Pp81W+kiLvLFvJM3Cq2lrFEwj6awESfvFMy+WrnibpZF/erz+tITUZuv1O8s97bxs5beQr54Toza5vDRyKjjjJcybW3D0E0pMWJZIwXTGM+XEllrrC1bKqV/N2yM5QsXjn5oOdahfqNYOvT+qczkyKjz+45ksqcTfg7Dz5Fk8kAuXxovGBeOliaN8YiwzcLRSMm5UDBLo6bpIGl01deSsS3LmW5tHRrJ7EtmU8n2ZA9epDP7UkOpjk68yhp2LrNvmP6l0nADKDbVjXQX3IARZPaZ5nByeBiuShNDmX3GkaFkDp+NWAWqnes4fAQuz+etzL7D2c4sFbWgXnsu" +
  "lz1yGC5M28aCXUNdQzMtb00PWVOtpfy/54sjmSHLzpl2K9yZaRmychemxwx7JF/MJHvG8sXWUTMPHMikksnzoz1Zq2DZmfOGHSWyYj3Iy1ZmWyaCfBPIN/H+qUg8ctIojEwUxbuWM5rPwvWx8fGCKfqPyzviQ9OKxEtQvLVk2vnhHhy4113icE/LkJE9N2JbE8VcxjZyOPkj+BdEJJpKJ5PjU6KLfhuO6E6+KVpTyTfj+9qNtHHE6OyMOzY0PW7YUDwWD9c/QhU7VXWsKtqxeirXMWx0h6sjaYatdd+dzJkjcWbE0EjM+5SOxXp8slsNxzGyo2NQJTOcnzJzMy1jRr4IDJ5isc50dQMFPYrhwphwrJ5xI5fDeWnvAuJS+OsIFJppGU1NE7th2sxMO9ajy0nmGIzIbycpoFpPwXQcmFgYRRbba010cjOiNGYUCtNSiDNDBSt7rsdvOtURaholX595FLqY7AzExnGssUwHNp3ImaXstF4UpDWmk5VOUzkU+mlterkw3gX2kThmUjDuklXI5wQ/xClQD1txHiZKGWSOx660xkkcgkjSTORsa7x1OF8ATsBIJ+wo1IlJEsRoWmMp" +
  "tabRmiJa88XxCeeMc2HcPOqYU87ANE8c6MObXtdYUhDbfgvxSK/GA2kgDKO5lmXyxVFQE6eRokwGpjFrjsKsmLbk/r7Due7OoSSMczyfPedN9Yidz/Xgr1bHHIM7jtkK5SfGikDOsC3gp2fEGCfSoKo17sQT2VG/+nDBnPIK9BiF/EixNQ8tlehJa8kxbMdnCjIh1f5/wRQ5B100h9kJuwQDGrfy4BzsAMPYRia75SgFEuwZL6Y/YQ0PT1uoAM6FTKKjUzVXtJxW0AFrEnUSC2ZGjVKUOJvJjprZc2YuNi1JaxT9IBFoe9MpFClgVUiNwrowg4Wa9dUw5006B+seC0w/Ms0aiGt3qD2w5APTRjYLZqd1T711rHHkMJJt5UxvivNFMsO+TUDDItI4F2NW0UJbYoYNS3dooI1Mkr5PE4ScAb5SSYKs0CgJnm4r/fLUEx+LbpKQiRLSYhbMrAPzWjTBi02ATSrGE0NOMWTlmilvpy+iyTAR6aCOhv3AEc0N4OzE93UMdeeGh2OSHyiizEVADiJ1GOiVahzwnOpeSNa1maLBo7a3ktZlcG6hBN3JmVnLNpy8VQwMPwMjN4YKZk6T" +
  "/+biD2xKGAVnulG3UsZrlXemJTNsZSdKMPZSHrqatiYcgi/todI8wfJpK+gkoMEMu4Ihw54et0p5or/kgB5f6MERJ3v+HRQhZ05lOpuIkmn684eSkERZgNbAa4O5kyCiKzh5e1sdNFLWedMeBo5kRvO5nFmEtsBpFKZ9+POmFJ7kbxIIbfyxHsIUPFJqSyTSnSXoCdFw0MienQBWDF9olZA4Q3rXOmQ6k6ZZ1H11exMjowsO++XPQ54OBHGGboqh6T0thK2YCA1MGnYxUBLgJHpRYJZvO1j6EiBcgNt/i/VMdetD6g7BDwTdjaLvTT9N/L7SKABtTbtDevyLvjlgJmZaetskgu9tk4EMImMMXAC/wZ83WltFKiHcZ9u1lW0BP7XvVkRrKyJ/MEMwwSKfOxoZAQdLsVCqr5cwV1+/YxYKhi3esc1J8b/uCPdv27VXFffqnHtzvbayLGpL5dqj2fr1bSCAKjSPbqDBlt5xkS0YpdLRCKKuSN/u1qz73UZtdbF2Z3F3c0G41cru9jW3er+2Mitqc8tQ0d2cqy9v71bhenWudnurtrQjm6ytbInanS13bb1271ZCQF+7m09E/X4Z" +
  "7v5QX1rDNrwOqAGtQffhjqjfXQIu1Jcqwv3LunBfzNbubNSXtrC13rZxoDaXP6/oRegV6esdTfe5t27Vrq/Xfrrl3qwEmQljTMtayMmCNTJi5sCAQL3guAVN1NGIBtxgsiOBpt0H0PqDyu7LbaJx2X0Co2XGwlhqq1dglBtI891Z4c5fc8vrtdUysWR10f36bq2ygy3wEN2vd9Sgeg1FCVjQiIwy24DUfPE1/fe2GX29bTCwhuFBNdUg6lXEK6aVbmChPhHEtF/mT8qLHTyg8hvEB2cbWOauPQRO1srbJDD8CKoK99Gqe/2WZC8ytJmAEfcItgiCLRHU7wixwpwqWhGhIdqjkdryXEacSLUm30//98Otx95Opd85HhEQRBXM4ogzejSSTkYodIJAHkJMB9oDF+ONnGwHmd5hyx7LTIyPm3bWKGn8bS6bz0A/5uSsS3EEM1z0SgJsYpJB5bEtfLjXqKAIlw8O7O5O7fufgLv/BXwXHSht321I5kI9bGkMah2NFCfGACBkA4PuaDZmzHgYQ2bBI3L0XCRIk0KInqgZI7YJvNAVBKRVV8zdZ+Xa2hLKgVTR3c3LMJ/uk2pc1B5d" +
  "rK3dEPW/zO5urtWuP3fn59z5dZhgIuOfIWd+3X0I1uDShru6gKbR/bpcuz+L/V5aBgpma5evxaHUc5yk3WfPa5U1skMgk49A6Jau/z+mh8VY1NZvKNLql3/4+WVt6ak0D0DWbhUs9b1vQFvQRO5uVnef7aBO7G5X3Qcr7uIyagYyD/UE7MrKMhjaBgqlUDKKY+nBwCoiFKDrk9PAoslWWlI3X6mt3uht47rYlnRH0mWlE6pkg68yp4yxkPkJKAbgNGCVdoOgVvAWIiaWd/ok9auJliHggcekTlg8C2jA8XXIu18wjfNmk/tOHvQh0pdMZpJJ9TDQV8gG0gDRrgSNoYSOyRCgwg7HdeucLzm+sdDmBWGfqc1L7SkoyiKIIEz43pPQnpCi0TgJtlmaKDgN0+DjB+5B1O6W3W8XFEaQraFqAJx4NIvC5z5aQEgBPv7BAv6+d6s5agDA4a4u+3XJuq+BT3yofHmDY3gGGrhV+3ZH2n7mVX5shEUVcBgYpoID1o0lLUwdDijoOLFeDgQnZ00WCxagrY8/fNcvL8lBt9lgqQVjTUGMonby5/c269ISF3Oo3+gn1fVYaaTBT7IQ6LMN" +
  "kwNlQ5MDqgvjBBrLtasPvDnfg4JGcvlGZC+5lTSFxZM5Qi4VjB/aFQQ0+hTubm/TXM0tuN9seBO6vPu0itazfvcW1KitgN34Hw9qm8u+I+fJ1AS2TQLeUtbOjzt9LW1viaP4T7gb27W1CiID8A0iKuHUe8fRxE1a9jnTTpwtgRg+FrVKGUQHCsjCMdnCW20tEN6UHJEVR0X087iw4sKAh30iOi3kpZiJ9chSH0OpM6KtTfUMLkdEk1+2H8mAzV2o3V+Mi45kRtQuX4QOhftkHenBebn3BJ6kvuzEhwDr7oP6vLgFOhJryUYjSv7BrNfuVdH9BlyfHBby9jtGhFB+foE94OzvIvEzER3SR+KRPRE9PHvXKBhTF8RpE0xtPFCRkOdeNYV7YxmdDmGr+fXIQDwdiyPx7o1Fj0IcgE/l8kVQ+qjsIYbuiV0Dgl8PncGn3zoCSYn/iRkyx2QlX0cW+LyDXlMHyUaRgYJP/x9JSjFJWs/U2e0t9zbws/IjuWeMAR7in91XC7V72/Sb6UBgMb8i6revARCBQtjLBgxng+j//jGODdtbma3Nr4Em/fwSVAwsNJYDvFKugPWEzxIDQ32f" +
  "IjnEMD0rO1r3bvUWGpiVZWwPUBh9qM1tyjsv5vCD3yRy67eNr3Z10Z3HturLO2Di8cPS490fl6Wc1Bdmf37JA8aO1y76sndwzzk5KLX9ID87CGxxv9mhEAttkQR0FHpBu/VL69iT+2hRKZQLPJ8DI3WjUl8uY7cry6Dy8J/G/l9MJkaJ0NKjRV/sapfnpNpTgMraLOMQBFzsDpdBw5cWFE+A3W4VjNJFCeJqN6tETfWJu7mkCKptzbkL6FIv1i8SHxD73oKqMlYl1pTBqEKnt2qbP+DUbP0ZYva1+sWqT1/9+is0lQBUwR4TVoWI6UUl6j5Zrl1ZjkGUTZRJEgBCYLAl9WEftPl7+NkPP2/6Mw5wwC0vIjOZOBrC7W0I3H5Vawfg5w2NgddhapbRnbnfQwjyCqXIFybZhGZK1jRBegOaaoMfuIgkNAIpexA9ZRXMGAnJtzvuIrRw7wmohyJH2YpLP4Bdh/q7LxYIfFASgSwjG/Pd5xCks0Qs1JYgaF/dqF1ekRMCukhYAUnT+oeS5adC8Wk51HN9YQGnESCN1FMqrgD9wizMKdLzslJ7dVd6UTm5klivo+MnKT7a2Krd+TP1" +
  "s14GZ0NSrSv08bwNrlWcNEslY8SEto7nS1kLkMFJjA7h0sgXLoiT8BsvrAmAlVC4iM7Yn6fd7VkMFdHNP39Obh7BXoUU9kYFgw05vLe45FvQ1lvqM158+SVffPklXHzxBV988YU/Gr6DWlN7+bh2FZiyRhq7Pd/YSaCxzz7ji88+C/e5bx9f7NunC9x6/esN1MFvNqJkDnZiAs3FdxsylvuF7s6c4YuBgeBA4pHpab6YmfFNlsa37SrYQZig3Z0tmuq9GKiPQONmoCuNIl/uZEpr+xYEfqyfiMdZJZdWAVcTc6Vy+mDCrT6tzz8V7bvViogODg7GUChXb8Bj91a1trwF5NFDNNQXq433ljDRUr81xzd8j+ybxZUdMkLzFQxWMQgFBAnqUV+4QmR+/yOyHYVKcp+48VDRV788ixgKTP39y+SBZnEOyQ/XlyDkfQa2bQlpvr7uroH112ioX3oYfT+fPRfDaMCtbkXfNopsE6rkRmkaVsP8uLFM+ae7ZbSwqxDpV++ys4fmSOMubXFAgnQ+Wohjy1QDbMPqFdBX0HZo9xq0q9XbEu5X0E91Ce0MCtzmApLAKEI2QKgFmoQWb+3+" +
  "z50AnEDzD0bw0Sw5FrATaK6eldHlY6aCDAf4EH/iwYaS7WtgqM8oYNr9V/X7V0JsBXI0hbm7TVaR/Osnpz4ga8y2DQlRVKGIE1d2EHJjsnfPCfVMp95/aJbZiGvCTR7s55e+VQXYT10+B5+M3aytY0TiPgZZA07uVDDR7EHPdU4mMb6qVtxqBbNfQIXkwtIOiaZ3DWYXsNftG/4tYG19aQtGMoeE+1IOdplzVQCAryJHQDWAIzLxUr+MCS6l2seOn3zvQ2jr7Y9Ow+9/ee9j+P3hiU+1Ob60pQVKwXSUFwmDg2o+r1xTJqYatIMYKh0cjocQgDbN7BA9MdCkDNgHzll5qAZ9kSgag3hyUFCFpdrHQRz8APio1C+Taard2SLxXJ+VCkDGgtp4cYtYrdrwzYSnUL7LYMZz1pTKXP0LCBdwBQNAUhCVYER4Baha0Zx25x9DbQmmouk/HEOr574qu+ARKK+MbGQD995xn6WcnFfNkrAKXHJYqzRwEl0YCO0qCSvisEdLe7KQ0QfaCIUR1y4GeIgajpK4JlRRXkZ4VJb82/ozmg3uE+dZ6qBsREckVO7mtl4iBJ3gUQX6lSqPVovD" +
  "aSqO6qSWZ3j6ZTQrb5Zl8qaRiEA5lmYu6s6/ajbf5BbUbcDjf+NVpDtXA4EfRHsAdGiudVPEY8XIHGZajYTzJu6zXzZRAdUJOyCwjrq9DE286gws3Gr555ccxkkfSKK/tIBjbrSKfti/Ke2wb5yrYNm+fwJ+fQ+c75lUOXbkISpw+VtiZQCUu8+2QROXNG3IsOPJIGTij4TW+SOC9jb+2Ba0e0yEbiiWNzB6pDx1RQfbryqIo2+uq2kndfInd41iHVY4P5nuuU/f22AH31WlU71VBmWqL7Fkgr6EjIMfp2DecK2CvhKVb+MFWZ61JRLSvVzkq636lQWQABmF7uGlmghBwE370wI9I9h89hWvcwHCuNFU8DDtufQALbMSNOkJ95h3tr2P5ihVI/2FTMmUdTVnSd9rtNL2A4e+vxL1ViPRJCrfpuIknxO+hmjR8EV0eKClBwPu8iAFPEu0pMKa7EkGKsMOyWj1fsO86/rEfsFdXPQMnoeeggGXtFOB5NCjOYSoF1ENF8BGYkpSYn1MYmKs+SPNy6IeXqIzBqWD8jL3AnDQnd8Azx4mNOCohVYBM6U31z2RDRoIXLvxLbiyn1vU" +
  "DFgLfuDzlo23FGLfhJFB9vIb7H6bwh5pEWWgy8+Ccay65WkWNgx0aIVvb5Py8LVP255ZTJ5xlsemqct+Bz8XJoYaUpUnLavIpfwg1HOTKrGjnAkydHfzVe0VZSCicqzuV3/F9MvNKiECCNPvbse8RXjZ1qw2/5iTgVg9IAXIy0vLMCEI6ut35qhARateX3pSe8YiKqtLsyZdOWGSWc8/Lsuq5IabV7j0119ZIYw0SObA8qxxjEENNFTzuPl787xpX7CKJvZx0LNbwottDqKS/GNlgTYiQID2bE2ofJLX9D8qV0ggFacJgL7cFgpuMq6T2h6MD6TuaPfYtccbYAhIVtVFE7KxhYFppaxHezz7FDQ1NO9LjlpQih7LjeWL+ZJjG45lxxrglKRYOqqgzuji5A0JSCK0j9yREE0zRGs3dl/uNEAhDAkWyCeEJzRkyZrNuc4bygijuJCPJx5IeoJTjdZSR1wY/PgjVz6BVtgJOd9ZxvFKeQSHgzqMi90qhcWOnwqv1V5U1GqQFMe1cm1zi3f8PKwtXQF9UsNH9pUrKp21cgOX0jEwvr6ImzTWtvmhagdG/c016mW9rNfEW5j7Yowo" +
  "1wbLOgJnHvFY1UClengwlSMhiChpgUifI0zGbt4CPnheCkD8PKli7XlFLvZIFXi2RZ5XV1mYBo4UoA7mHXard+UaWMAUNAP3/hPZ4xbH8mta03vHGb8+YpMyVCmje8f9MpcvArNA/6hHpoUVAfjzi8A+xBPexKT2eknf6Ad4e7TiC6bWChAEYwDRogxKKCZQXpfW13i3xl2aIxoGp9S3QrV8g1BdRFjOgVz02EQu74gPrJEYMfHS4+YMc5/N7m7+pJIQcmnx55eIzmGS/f1qAq3UHQLunkUARI6JIxBqP9zlRYzjJ8OaL7M5wr3yCu5r6SwNfUbZ1cekVBKA3q7uVj1Hm+4G1AUtH+Y/R5L8l6sxk5oIE+8qxJGtA4rTXdjCQc5l3wIoL2oPqrtPt/yEDtaiJDutSXAE3WTVglVD7n/DPSSd7guQq82fQE80sHl5BXmRcq94z3w6QadeVrQ1F06U67tbWOyIg5qU7RnqqVXb+Q0QiKjMu3MqJeYbIz09FsifhaO2ZhwFFAXw8/o2rSswSPqRBABB0xVckKHEEcwrR7Ih4AZl/7ruzs/V56vKxtbvgvl/yksFYQpFOyc35IqV" +
  "Np1kphYOSvvbiQlfNOyXL1KPr7Rs0LEJxzpp5diI6/sRg2YSxACqKTPJYB90db12f4FS0R6mqFUfA1FxDn535NaFuAgn/fSVb6FyLaR0gfhHPaqtbvCWQc0vyidqqURNBoUtmL7UvdaiCo7VBsLAcGrfXaNtFjKpRR6+dnnOy92v6dGpFnX5uVt/RBgO/hB+6MMA98atsL8WjU7WI1epJec6adgQMDSkN+tfb9TL2xIdq+bKPtd8S0reuBn9REgoHNhrjE0a8Ab0TgG3qot+M2ubDpXZXsAg516VsrUUMqiEBVt8tcuEVrp18OHOlTGZgO7Uj4IoKll6SsMDIl/9QDmlRtzBi2/E1B99wKEHLr7IezOvkIeXS6xd/QqiAQJfOnIJJ4IQVgccAo4wmHmU9pSQdm2nAgNngHXpIbkV5X2VX3Fv0hD9dDcQByP1dktuifQfjlFbXz3m/LcHLHHN2c8MYTCjisp9tVuBCgEQgCNVpTmxzuscWvO69+KHjEgpMRHqqdIksFXr98oBPqMARAOp7sWy4o7K7KicmLfT5/HuJkaypKiEvBlAXauvLnjBBq/ZCInYPTBP2ZnruF9Jjogf" +
  "YEmtPo8zeNcbyEEVWdJcebQ3N5y+vgbUBzd34m6a2k/LEl7EBWknJdA95CBkakhHgNAdacpaWSumJ7RrW3O4ng4+ozmEhAZIf6iNML0ywyCzo8tlMCIiDEDdvy8GgJwHvIWns36UW1ted1eXETMwrXo2jbO5dNcnVd8QwZu+F9xvF4BhoO/3nsg9sCRm5D1VDkQu/gdNCDVCKxJfgQkF1gCAfLUsczqkmvdZvuT+jXUPD9I6BM7p2jrIjz4HaBJoRYrWIBqey2AG6l+ntWbvuZ65BS0EJ8rqjY99hwB+4ptr6s0BzJRuPokCCMHaNxEE4l685Rpmp+QeDIga1+aIkQuzEGkFoZpCBJiwu/0wLiRzUSrR463fAHriQoKAANgIhLh+WjBgLhpCTW/RqXGpqMGrroOMBuHeszVOvt3A+fWdoJ9s5ljYd9srEG6pjcr/uPoXgoi4TASMeFClO+zo+SHtk0bapLtfvogAlxWMU9L6cie7XExg8/Il0edvVOXOaYBk2L2XUygsDy+OC1x03K3OSbOOfF/dkIKLYwONA0nFJoJ7g27foC38ZGaJHa/KTClx8ea3yFM5aNx1sD6rjNDC" +
  "IngfnC65SkrUE+KE9ur/sU2NKWATHjwlLXGbnZ9txFzTRd9nqL1wkpP6Sp4/ozJc25K9y6CI4sswt0E73cpj1BZl+RW70UHgViZ612PN/U+Zz91i+KYGjyF8lXaazW1gPFx+6i8SkqL/5zxl8G5fA3dPUbekjVyryvUp0y8Rvsq0BJ77cSXGK2to8IAzvDUIDOXmFnhoMg43FpsjGpRw2oSC04/LfDKe1KcPpY4Mm5+r9E0FRXbYmW8Iw5ZGbkQF+MeWCIH6var3XFuDXS/7JmzPFWKBQdDmY977CaE4cQ36xHzqpeVwBO2nma9vuA/+FqdU/KM5+HsHM4iUMiYb6XsvhDT3F31sD8JBLokjWLnsyhi16SM/bv56g3YDensH5HKsQsybC7g3ZXtWwhUvvqNZubwiEQIvI5GWzm/IxjTsQ7t+9ds/cdY5eJuceeBeYGfSFdwTQlzaY/cYQvvb22hwUPQ3f0Bq0FEBw68xz6tLtTtVte7oQV5/vxlSwFDWt324vblMAoa4Fw3BoxvBPXoPKiAqcjeElwZEwyGNwdbrdoIwXWXwWfoaRcOKr7/jhsPF0EYC3cdCIPtiOYg9McSq" +
  "eg622jzVLXjbg578DKyYBPQS5+m+Z9nlShUv0SPchOla2IboaAe9NmIJgBQw42geNjDq0p3/LYyNV5R6eJlMeknhBczvghdleIpCwsdLQaHwQqmHDJMvXwuvYixha4/m9D23l6/JtJy/gE8bpRUaa7LAr2E1Wrp/TQHpTwK5St62LPP1ukNHI8TemTyqWm2UqVTe6CPeOy4X0AiLNgA4/4XJWQo3/z7rhXoggGCd+aUAdBa40MzZ+Wez/uIywuwy7+6gOA43OTx65N0NdAB8ckEzVBr7zlVvCrkXWl5cUKF8kJrbwcw0wAre7aC9ZIZ7iFXma3WDIR7DgbKXxwy4/yYQjvLMgewZJwMlo+UWAs9k1u8uA87R8zPe+m4gBSNzL9ouUDQYUTYfMQ8F3tvC1ghE3/WolAFYWSVo5WZnpW60muRnvNaWcP4xsLr0eHdbLezSSoK3MUBag+MnJWZA+X5ErAZz5T1mGhu2EQR3bAV2++ISG2+LCA7BJ09mDANJOm1VTu1iAsNJAeScj33ZncrnXqSkLUN4D9XCLCfhMf6kjGXjQg7ZWn2Rym/r2x3OC7CSoKvxcumIfjHRpy9b+Fov" +
  "k/XBjNDr6+o2IVwdG361TOnODXQ7fljNSaI5FRbXllZRswPVQ8s4vDrpJX14XUAuLpItZyB2kBjgp1D8Gv5yJHkHqhTMDaHQ8cJvaGXDX4mQuYVycBGOrSpC9dnFwBNtpZo0KwwTWSdQeHAfb3CrBhuu5zoKKGu7hYPGILCI22QNl7zlxTJFWRL/eWu3zDjdEasNM6F9fGH/rwXZlV9MgobxY/1KpX4LfOnfiXUIaZX31eEiteenv55vYMh2V21SiHoj/fmlBxZpeV+PRWWRcHiKurZZJShHVqfplmUvUOVtGmpZWyoeW4zaAx31+GuFfu7Q3yvCkc5jf28Lx0hI2I3FoJDwkg2FjaH7WuwEABbfmua1Dq9d3c+otzFwE9NDciMHw/ZeOomD/k7wLd4TQ2Dwpf4mdO05mPydIMjj13YIed2r+qum0tng7atfyS6IeLk7WqbatCdqOXINSZO3dVjMaFziSjAn0WN2djR/3owxtUz7qzLnKYLwfe8MoXqL8s5WSOk5AdDA+hsYPvIiMnrxRX8VMtBMeHsiD5mKyPUMeU7Fsr6VcjmYLfRxT/NNok+rcqFT29LnY7LQSqoW+nnX" +
  "niPiRjV6l36C+jJy1tNKrKEyz1ymoxo2NzT++5kPhK9L5cBuIHITKtkgGQpA8PJFsjag2ZdoK17I0cv3/ClS4Y55SwWIle/tX267lx82LKD4gN/bIiQ3NuimGYw/LTYotB/yq3LjxbL7N96rIdMaaxUYqO8p6c1Qb+uKt9OCgMEyYjMFvHUV3rtIk0RJ/c8Ao8tKn71MfXDVh9EDvpU6txyXOyylgZMwLk6JTQBLK9tydRBcOLjnzcu4GkDnTgQDrmZbuv3NAHsuXqk0ONjs8tOfX3IuBv7qG8/4zR4GalvNsyIgEzL15+L6qVyoAwnBrBqnDbXh8AvwvO1761ekZZXXaJop8VIcxIHbP/r53mZprFcVP1/NG3Y46QOkVfxotUroTMoaZ3JkPgon9NmizGPReDe23PKcDzZeVTCJHxgGvlqw9ATVHLNMMqOzpVSCM3/VCr5CRQvj8hQL0ehJGjJd+sZqygnTaKJ+WtRzym51qX55Lua9rkfBJ3nWJU9Gce+cF4OyEcL9ciuEDTFzD0LKckASAXaNttJ5L4ei0tVXHnovS/obgPRlaS1SZTflp2W9LQssrI17CSnNxJka0MnZ" +
  "pokA98Wcwv2ce1u4SUeSUBMYerGGhnZV+TuMSZJp9pqtHdCDV+ik1R4FTw5xqA0rBn6eLvAAR9YyoN5ct4sj+Ia7ERdD9Hr7Mds2LiSGbWssOi34OJeMGBKtwhCHRErMxEX0s7jIU1m8lffegT/93olT/fgefAtUxONCMiLCL7/Lcz0icYH/8rlSBruNJuOi/UiMbzb9VzTNXEa0J6FXrc3QS/SqaWr2TAc02hEXnXFxOC4SiQT20w39tMcG4r/QrHR9gfawekcqLo6AMMh62AMdgYdnA2eEY0+YYgb5qU4f2POff6jAfmBTPocszFnZCTyCNTFiOicKJn58+8J7uWg+5/HVLOEZBCUs3e/YeaCoFEvYJh3WE207c6C3LzLQNhIXY3w6QeRAJBM5YIyN94AI9OLngoMf+/DjCH48GDkIHz+fsOBi5szYQMzrqjQ6MTxcMKE7Axubxj/CSJQKeegq1iOGLVtEC6Yj8nSfxQNkI9UDd/pEEv60tsagHjd3FkqdNJzRhG0UcyBQMfGWiOZRjmLiCyx9xjiTh3kxzpwdGEDJwQ94mR8Y6BEzwjadCbsoDPisKPzDRx+ehpIH/8nz" +
  "fA/SdLXCP/98NPgME4Sj6z/Rj4JcnCgU4uL0R+/D5whIxMcfvvv2Bx+97T05dUKV6mmJRkkjpiWZMBeiYGXp4MPEqFEaTYwZTnY02lY6Gj3zbwcGDsXagOn5YRF9Yywmx9nTMpovOZZ9QU1uv2M4ZpT7wv69BseBp3g+NTTh2Be8TodwUhxrKDp2JjWQKI0X8k40kojEziQHfHlpRVGJHIpoIvQZ3WqL+HIwDi39t/6PPoSe7BKQYE6K0+aUc9zEc6LsaCyRo0/RT0ARujWLMRTH8zL6RDaBp2q/A0WOOdFkLBaTgx1PmFPjICjHYWCJojUZjaGwSHaP90heI/kw5S0zIotME1ETSsFlLCqbwQpwq2V/VDt7LZag00k+AB4mjFwuymegeEP6ABr2yueL8EB8oNWwzTHrvOlX+iCRLxZN+4+nT2LFwd7xxiNY/lG5InqH+vZPg4ISSYmRovjiCxpOAs/9jM30tg2BSv5eK8L3Y9pGDHly2+KiOglnvG9QHGrh4lAa8GlJadrvQA5EhsiRR7Hg2Yfh42G6+eCgSJ9+1gU4XsDZvKGDU4cYc97ekqlQlerE89K0bXfqTSj/+C16" +
  "M0Q7kGUQmDUjzELJhAmZUXbEzOLkA+ekxUolk0nQ+7AxOIK3wRJAGzA3eFRZLIHnkr3DJ0ui2eOWPMHM44m0qHVsn6QPgxueIf18AgB9P524atnRQT5/lk5z3z9dnBlQp9oC3cq+2MDXDyfGhkCy7cR5ozAB8pZhvUbDMzxR5EOQ8MTEd7B2NObpnHUO+n7jDRLhAwdQwuiMuBi3k4DRw0jV9PUdFd2ylDpzLVgQHYjHvAMHWs6AB2s+sGOFAug2n/8VG0hQFBOdQqZMJdS5vcxUOp4LNFaeA4XkWudgzvAhnQEZQ3U5cR66QE0wQeqjEeIamBxvyDHNYKpDujSDCa1OAzQ4gUYcLDgdjQUeS4CvdJLyLx6LFSDJKmYLeDQyWK3ShWJWKBPanGp0tD0tQmB/Z/EDmz506L4UGJNG3hHDJtraSBu3Egc5GTOdUQucd+Tjj/pPwx08NxP0KgOPIlLYWk9fGDcjUMQA15FnS9t2tmSBesHI8ITNDNvEEol0fvgCACTHOmcWM2i3AB5YmT3mX8zE6KwgpPWsRyWeQWQVo/I++QI7AfIEJuSNs/AhJpxR25oUaH1P2DYI89nE5OgF" +
  "fB6ZishqxHn6soKMOJsoIjuVCQpZo7jI5ZEDv4+AImp3J/AuXedzcVGyz2ND8Ac+4xP4jPedPH508vjJtDMM9s7gnQEeOXRuwUMqBVVHqOYI6o8QAUNOZBsF03ai6uiZlbJ/bIe+dILGCKmNmokxPpQCtce/eAO0BVgB6uvfgxE2Gi11tlRtdQ2faJYN34H4uhw0a+QIkcrmgjhsgLHr8Zw2DK8F5V5ip2h/AjkEzASUNmaMRxnnKXvxOZT8+Ew+B1zDkzX8ap8nLCqO6PocKcI5JEOaqGnxeUZ8nsCDpzJYkYqew1JQ78y5AUCnBj+gY4k/Gob2jBhyf4bNAB0TFws4tRPc35RC84PeaW/6qWCf84GT5OgIupFTY482lfgcfRw83j/dMqUGAGJwVjYYOM/QGndC5xnSEeER+VUbn0P7MxFBenM0sn/67Iw8hE92ZmFX8jQ9Po1wMJY4a+WL0UiEHsljwbS7PZqNaw4OWGGNsUCBMBYgQTBJq4POKaIfPUqS2g9aAH8i4ueX8ho0KXiDpIMG0NMyCbNlTSZKWdsqFE5bGBGhLyST6WMkuIG2k7yh8x6FHkZBAU5p/NDYRv0q" +
  "gMmdZEy0iZT0sDRSPpkwPAoVVEDpLvbGAPty+L6dE00DMExGYjiCDJGvyr4JZRvL9aCp7EziGBp9ypAJ4YM5QafooWuZoG9UaEH2fzKeQ6iLUEJ5enoM1Jk8SjMxbpvY3nFz2JgoOBiNmAnWjn9BkSGMrgUKYGMvIE8kl8i8NptsPMTayBdLaroRkLL7OnSImMbHPIaZNogb9S/Pif3TXHgGIt3BQHnq4kMQbaSMYBqGNECf59AbWURHlecBt18A/FzEM3gCA/Bq8jHgMRokcsI/iA4DoqMYnv1mdET698/AI30iPXuXw9Qq2hr+louoljwAnsMntOHYlgJJpLN0QmcsQbA2waeRH+Wm2qApiabeQuFGyXwzQpX4nM6Gido/jRVnoOb+aVV3Rh5SOcgWgk7KDNh46gtJO+GRRYBJis/egMlngo6Y+GBMhZiYMxgVqrh+mlDNaAqR0lQOsMmQaQ7H8Qh0vNGRynZlzc7Dofgbo23RK1RwAFeHDvmxN+UM9DAsDzNKPRAIz49NFKJw+W8iGxfprs6OjvbOw10pLJMOlklzmVTnkcPt7R1dhw+jvLU0awl+9fX1iVQXtJju6OpO" +
  "pzuTh2PwINQa/KJy7XHRnu7q6ug+ciR5ZI+eVdnXtan3HWpT+c9oVDYERsuxpBVr70LDFpVVQ0/w6hM8jfkdAyJgzdSlpK2TWREw2al0jDRBE6W9oG0WrIPtmXCyx6Ro6HB+nbmU+QXDPldq4sOlUmEYMQUAwMvrZKEpjKyxmlLFty0LqCkqxYtjTOXJe1yMZx0vfYPn4Ue5kTYoRprnN25mf8H5IEKcxKANkOxxaei57imCrxDl9MeZuDjTCjWIAvgFVjQjBwDxk/SfmIqLY88q1oiLyVFE4tARTNwHFn4Rl5zMyDmr9f1TkZjvG2wDqUEFjJ4Bjw3WLw4N5xDnAirmP4hm+xkH6z5bpy/QPXY8YjqnYUqjEJAxBPmCoOQp+hYT6BH69aWmg7xqK3pV/35HXHQ3u9/NUtbSzIOF8Yw8p/c1iEbshTswopLRiecx+BvJUAqjg/hFIfhVRmBKMRE3g14ilKVhDk/YBS/OycEwPv7w3egpGZDiIbygPTZKDZQjmnNo7vGMenmvRd1Tx+6Sy6VogY/s/Wz/NM/cDHziSX+v/yM547puJmMzifHiCFt6eaJtEAcP/u9vbj6h7SLh" +
  "04Ddhzu9Q7Y82lnmWBq+MiKiMkAoLB5GFYF3PDDhf/ykes02eEYxUMaJxFM9As/wjSrEmT//y6iUyuiDOZVAhQGP7cUhKlUN92Ck/7EuAolu+W0Kb+A46TRPfHdD9A69Zri47L+G53j34eLHnUXOGYUPYqZCchdUcE8kHc0e/L6GO1V35SdcuZcn8BPT+UxpHWErRhc5FqACg5gPg3Fd00ey57dBvH5kwfaH+hq/OyL8Vrj8FolBRESDmD+79hONHteBntA2VsWh3zQmwsHsOTx4xbLhZ5hLI5zRVGdEQwhoD/EteRg0epahvQwFVAlC1AjfC0U44XlVu1bovUzc8PiP2e8iwTT0cE6a+j9Y9hiYewMlejiXMMCbwhAilDOJUGI9+IAOXo83JlkoD9Hv5yH6KQ+BSYd+lXToV0kHKDaichRN7HYGk/YJZcL5qqicDF7gp7hAe83XZLlnYkFCwYGa/noAwAE2uWhn/IRzk3TUxNBYvnk+itNLwDkfyTcmihJkaGXgF52eUVn1X04bmbZNaaNhPLsTajVO9CBms9GmghGbEc1n3duZiXPvJawTdOiGsms7nsp7KRyU5kACqEH0" +
  "ZHTURPy4L94Vsl5feFy/Pef1qh9uThrJ54njzp9na3HKsF/9as9DyNWx41u/wkQnQMIDmhT2p7pr2dtiz3AMobRTA4l4Q4ukbBsRHYCLP8XFvwKygUgAlBux/VRiyBzJFz8GVIZx31QCewAH/idEC1CY7hl2Vt6apPrqE/yhdhrL8JM/NS8TeN74zG9fPcsWrJKpSJzxh+UDAc9WfAqDP5JMosYVEM+m4CMIb0khz6yZL0RPJYoAJrEE2LgRjOq72wGE41cFniiisYF7h7jaW6IbWvgj3pNPD4nUkaTSqex5PRbO2iaAUbnqCvGjUTxvlHA6s+e9oPNTuuIv2oLLP6qWpuACHgDiI2mdgvrpnK/8Q2icp2QPH9D3cL2rvoYLwRb9/yN0NTSCZvkd9EX9jjWODyPya8QiTR6n8HG6PWV0dWFnU/Q9YP3o0KC/oRHkPt45BeG97OdT6qelWeSYSiW9oDHY0qA9MmRE052dcfWzfzq8dpPoAt4mUjOxwZ5GsQTxiIYrACXhW39svJXidtuJ+MMxNSIWJbnRAMMNR8kjfvUAyY8FCmAg7IwUzGE0s5M4YwBZZQZliqAspwQmnRmw" +
  "dlh1RkOzPSE2UKN4Eyf4GH7BF9rkgiqGS6KKDo4AT0cjv/pLtIDAT0GsQZBRZNM08fyNY/Akwl8kFlHZtNOgBL4zo4Qig1W/lVR7JwQVGJzK7+MNNHOEmmlrw90rlGF/he+DhgQo0jDtiWR3DCwzGyQMWhBSI73dSHAa1TXdoU8StAiuGzz8a9pMY5NTCfxus0+lmqXxBleM0nAlkj/FvjqGA8DInqLtEKvkbPMI/UnGr4ZMBYKVHpUrnSTlHDON0oRt0iyGuoux/iMhg5g3Ags0MxiX+abSpKSkowMJ4a871ghRMzaIG3vmn7sP16gFiGZn3hSYB1bfYMbv7NFDL6idUV9dQcdtDMpxd3Vi+uM1vQXn0QsCIvIrlnHROCK/YFmfzi6axTS2jka4m2Y4MJ0oeKoxJpva8gAuUHCYGukG09TerVmvRunjRS7Z3oED4lQoQomJ07i1WgscVOvtnWnMUu2hIpps0y7GXy3bXQ2y3ZFWss1dBmXb39tBVmu4YAG6Apkxs5Q7p8Adz6nB2J1vY5oc79a25iKqfr44bOE66Rn5kgOM4BSFsgNxcSbS5MutqECO1oywzg2CPRRe0hO1" +
  "whBV6/YUscQigeL0wjYVxzwJP7q6QECNTtuGR2N0V54NzOltqiAXcw/Rbi7ZqhbBMPmW7I3fOCLq6QHi54EBwKkwaFBN+4SBCPbMubg4P6CSVipliZ694zDyKw+OoANswukoFDwM4nnh9fIPBc/jvMmSoJfnKAcWIggxsHqgj4A0RQoWaYpvQOl7JlEMqZsZljPQ0frSD+6zMhp878K3yJ1JwimtIu3prd+ipJsabDmVkCk5xRnrnMcVKS5/Aq50IlOieRAnQkES5vyrgj7whPERrd7Q07BJgADhd1IHulLxNEh4qjMFphhsMY7YU45U8jD90BNNOdjXHk7yD2U897b53Flz2/Pr7D5vEmNo2c0AlGz/6y0u9/sR9finCNdGr4jVYWwCUePetDWaFDndEEJANBC2J0pgQhbEx52eKSGPFTIlp+ko3mBIIs9o+dWZI9/3+50ehqv25GvNMHgmdDnBQA86Yd8UCvAp6qLVeXnIIG+1D+ewmlCSwkQ5+2r82vtksgmskdl5DFU/tq2xfMmM2iatiAC2dqy3C9ZQdIhNhL/5bggT5qXoJ6c+kPj6o6GzgHfhOjoU4yXISH7MGDHb" +
  "KB6nwKu3TX1HVG+b/LLUtlFnrND3fwCr24qXLIIAAA==";
const B64A =
  "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";
const cache = {};
async function page(k) {
  if (!cache[k]) {
    const bin = Uint8Array.from(atob(k === "a" ? B64A : B64), (c) => c.charCodeAt(0));
    cache[k] = await new Response(new Blob([bin]).stream().pipeThrough(new DecompressionStream("gzip"))).text();
  }
  return cache[k];
}
const enc = new TextEncoder();
const b64u = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
async function sign(data, secret) {
  const k = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return b64u(await crypto.subtle.sign("HMAC", k, enc.encode(data)));
}
async function auth(tok, env) {
  const [body, sig] = String(tok || "").split(".");
  if (!body || sig !== (await sign(body, env.SESSION_SECRET))) return null;
  const p = JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(body.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0))));
  return p.exp < Date.now() ? null : p;
}
const sig6 = async (g, ti, min, bind, env) => (await sign(["no", g, ti, min, bind].join("|"), env.SESSION_SECRET)).replace(/[^A-Za-z0-9]/g, "").slice(0, 6).toUpperCase();
const stamp = async (no, t, env) => (await sign(`start|${no}|${t}`, env.SESSION_SECRET)).slice(0, 16);
async function checkNo(no, p, env) {
  const m = String(no).trim().toUpperCase().match(/^([MUE])(\d)-([0-9A-Z]{5})-([0-9A-Z]{6})$/);
  if (!m) return { why: "수험번호 형식이 올바르지 않아요" };
  const ti = "MUE".indexOf(m[1]), g = Number(m[2]) - 1, min = parseInt(m[3], 36);
  const age = Date.now() - min * 60000;
  if (age < -60000 || age > Number(env.EXAM_NO_HOURS || 72) * 3600e3) return { why: "만료됐거나 유효하지 않은 수험번호예요" };
  for (const bind of [String(p.id), String(p.user).toLowerCase()]) {
    if (m[4] === (await sig6(g, ti, min, bind, env))) return { ti, g, no: m[0] };
  }
  return { why: "이 계정에 발급된 수험번호가 아니에요" };
}
const fail = (msg) => new Response(msg, { status: 400, headers: { "Content-Type": "text/plain; charset=utf-8" } });
const json = (o, status = 200) => new Response(JSON.stringify(o), { status, headers: { "Content-Type": "application/json" } });

export default {
  async fetch(req, env) {
    const u = new URL(req.url);
    const redirect = u.origin + "/callback";

    if (u.pathname === "/login") {
      const state = crypto.randomUUID();
      const to = new URL("https://discord.com/oauth2/authorize");
      to.search = new URLSearchParams({ client_id: env.DISCORD_CLIENT_ID, response_type: "code", redirect_uri: redirect, scope: "identify guilds.members.read", state, prompt: "none" });
      const hd = new Headers({ Location: to.href });
      hd.append("Set-Cookie", `st=${state}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=600`);
      hd.append("Set-Cookie", `nx=${u.searchParams.get("next") === "admin" ? "admin" : ""}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=600`);
      return new Response(null, { status: 302, headers: hd });
    }

    if (u.pathname === "/callback") {
      const st = (req.headers.get("Cookie") || "").match(/st=([^;]+)/)?.[1], nx = (req.headers.get("Cookie") || "").match(/nx=([^;]+)/)?.[1];
      const code = u.searchParams.get("code");
      if (!code || !st || st !== u.searchParams.get("state")) return fail("로그인 확인에 실패했어요. 처음부터 다시 시도해 주세요.");
      const tr = await fetch("https://discord.com/api/oauth2/token", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ client_id: env.DISCORD_CLIENT_ID, client_secret: env.DISCORD_CLIENT_SECRET, grant_type: "authorization_code", code, redirect_uri: redirect }) });
      if (!tr.ok) return fail("디스코드 로그인에 실패했어요. 다시 시도해 주세요.\n\n원인: " + (await tr.text()).slice(0, 300));
      const { access_token } = await tr.json();
      const h = { Authorization: "Bearer " + access_token };
      const me = await (await fetch("https://discord.com/api/users/@me", { headers: h })).json();
      const servers = [];
      for (const g of guilds(env)) {
        const r = await fetch(`https://discord.com/api/users/@me/guilds/${g.id}/member`, { headers: h });
        if (r.ok) {
          const m = await r.json(), roles = m.roles || [], [rm, ru, re] = g.r;
          const has = (x) => !!x && roles.includes(x), need = (x) => !x || roles.includes(x);
          const hM = has(rm), hU = has(ru), hE = has(re);
          const ok = [!hM && !hU && !hE, need(rm) && !hU && !hE, need(ru) && !hE];
          const why = [ok[0] ? "" : "이미 회원 이상이에요", ok[1] ? "" : hU || hE ? "이미 상위 멤버 이상이에요" : "회원 역할이 필요해요", ok[2] ? "" : hE ? "이미 임원이에요" : "상위 멤버 역할이 필요해요"];
          servers.push({ id: g.id, name: g.name, nick: m.nick || null, ok, why });
        }
      }
      const body = b64u(enc.encode(JSON.stringify({ id: me.id, user: me.username, gn: me.global_name || null, servers, adm: guilds(env).filter((g) => String(g.admin || "").split(/[,\s]+/).includes(me.id)).map((g) => ({ k: g.k, name: g.name })), exp: Date.now() + 3 * 3600 * 1000 })));
      const token = body + "." + (await sign(body, env.SESSION_SECRET));
      return new Response(null, { status: 302, headers: { Location: (nx === "admin" ? "/admin" : "/") + "#s=" + token, "Set-Cookie": "st=; Max-Age=0; Path=/" } });
    }

    if (u.pathname === "/start" && req.method === "POST") {
      try {
        const b = await req.json();
        const p = await auth(b.token, env);
        if (!p) return json({ ok: false, why: "로그인이 만료됐어요. 다시 로그인해 주세요." }, 401);
        const c = await checkNo(b.no, p, env);
        if (!c.no) return json({ ok: false, why: c.why }, 400);
        const gc = guilds(env).find((x) => x.k === c.g), sv = gc && p.servers.find((s) => s.id === gc.id);
        if (!sv) return json({ ok: false, why: "해당 서버에 가입되어 있지 않아요" }, 403);
        if (!sv.ok[c.ti]) return json({ ok: false, why: sv.why[c.ti] }, 403);
        if (env.EXAMS) {
          if (await env.EXAMS.get("u:" + c.no)) return json({ ok: false, why: "이미 사용된 수험번호예요. 관리자에게 새 번호를 요청하세요." }, 409);
          await env.EXAMS.put("u:" + c.no, "1", { expirationTtl: 2592000 });
        }
        const t = Date.now();
        return json({ ok: true, no: c.no, ti: c.ti, sid: gc.id, srv: gc.name, nick: sv.nick, t, sg: await stamp(c.no, t, env) });
      } catch (e) { return json({ ok: false, why: "서버 오류가 났어요. 잠시 후 다시 시도해 주세요." }, 500); }
    }
    if (u.pathname === "/admin/issue" && req.method === "POST") {
      try {
        const b = await req.json(), p = await auth(b.token, env), ti = Number(b.ti), g = Number(b.g);
        if (!p || !(p.adm || []).some((a) => a.k === g)) return json({ ok: false, why: "관리자 권한이 없어요" }, 403);
        const to = String(b.to || "").trim().replace(/^@/, "").toLowerCase();
        if (!(ti >= 0 && ti <= 2) || to.length < 2) return json({ ok: false, why: "입력값을 확인해 주세요" }, 400);
        const min = Math.floor(Date.now() / 60000);
        return json({ ok: true, hours: Number(env.EXAM_NO_HOURS || 72), no: `${"MUE"[ti]}${g + 1}-${min.toString(36).toUpperCase().padStart(5, "0")}-${await sig6(g, ti, min, to, env)}` });
      } catch (e) { return json({ ok: false, why: "서버 오류" }, 500); }
    }
    if (u.pathname === "/submit" && req.method === "POST") {
      try {
        const f = await req.formData();
        const p = await auth(f.get("token"), env);
        if (!p) return json({ ok: false, err: "auth" }, 401);
        const meta = JSON.parse(f.get("meta") || "{}"), file = f.get("file");
        const no = String(meta.no || ""), mm = no.match(/^([MUE])(\d)-/), ti = mm ? "MUE".indexOf(mm[1]) : -1;
        const cfg = mm && guilds(env).find((g) => g.k === Number(mm[2]) - 1), sv = cfg && p.servers.find((s) => s.id === cfg.id);
        if (!sv || !file || file.size > 8e6) return json({ ok: false, err: "bad" }, 400);
        if (meta.sg !== (await stamp(no, Number(meta.t), env))) return json({ ok: false, err: "no" }, 400);
        const bot = { Authorization: "Bot " + env.DISCORD_BOT_TOKEN };
        const sec = Math.max(0, Math.round((Date.now() - Number(meta.t)) / 1000));
        const tag = meta.pass ? (ti === 2 ? "🎤 **면접 필요** — 임원 시험 합격자예요. 면접을 진행해 주세요." : "✅ 합격 — 확인 후 역할을 부여해 주세요.") : "❌ 불합격";
        const content = `📝 **${["회원 시험", "상위 멤버 시험", "임원 시험"][ti]}** 결과 · 수험번호 **${no}**\n${tag}\n응시자: <@${p.id}> (@${p.user}) · 서버 닉네임: ${sv.nick || p.gn || p.user}\n서버: ${cfg.name}\n점수: ${meta.score}/${meta.n} · 인증코드 ${meta.code}\n소요 시간(서버 측정): ${Math.floor(sec / 60)}분 ${sec % 60}초`;
        const payload = JSON.stringify({ allowed_mentions: { parse: [] }, content });
        const sendTo = async (uid) => {
          const dm = await fetch("https://discord.com/api/users/@me/channels", { method: "POST", headers: { ...bot, "Content-Type": "application/json" }, body: JSON.stringify({ recipient_id: uid }) });
          if (!dm.ok) return false;
          const ch = await dm.json();
          const fd = new FormData();
          fd.append("payload_json", payload);
          fd.append("files[0]", file, "result.png");
          return (await fetch(`https://discord.com/api/channels/${ch.id}/messages`, { method: "POST", headers: bot, body: fd })).ok;
        };
        const ids = String(cfg.admin || "").split(/[,\s]+/).filter(Boolean);
        const res = await Promise.all(ids.map((x) => sendTo(x).catch(() => false)));
        return json({ ok: res.some(Boolean), sent: res.filter(Boolean).length, total: res.length }, res.some(Boolean) ? 200 : 502);
      } catch (e) { return json({ ok: false, err: "server" }, 500); }
    }

    if (u.pathname === "/admin") return new Response(await page("a"), { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } });
    return new Response(await page("e"), { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } });
  },
};
