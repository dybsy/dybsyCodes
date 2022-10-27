let [, , dadIncome, momIncome, numKids, sharedParenting] = process.argv; // bring in arguments from console input
dadIncome = +dadIncome; // convert argv string argument to a number primitive 
momIncome = +momIncome; // convert argv string argument to a number primitive 
numKids = +numKids; // convert argv string argument to a number primitive 
sharedParenting = (sharedParenting === 'true'); // convert argv string argument to a boolean string

var oneKid = { // lookup table for 1 kid
    12000: [000, 8.30],
    13000: [083, 3.54],
    14000: [118, 0.98],
    15000: [128, 1.06],
    16000: [139, 1.02],
    17000: [149, 1.00],
    18000: [159, 1.08],
    19000: [170, 0.94],
    20000: [179, 0.68],
    21000: [186, 0.70],
    22000: [193, 0.72],
    23000: [200, 0.64],
    24000: [206, 0.66],
    25000: [213, 0.88],
    26000: [222, 1.14],
    27000: [233, 1.08],
    28000: [244, 0.66],
    29000: [251, 0.60],
    30000: [257, 0.66],
    31000: [264, 0.62],
    32000: [270, 0.66],
    33000: [277, 0.62],
    34000: [283, 0.68],
    35000: [290, 0.62],
    36000: [296, 0.60],
    37000: [302, 0.62],
    38000: [308, 0.54],
    39000: [313, 0.76],
    40000: [321, 0.90],
    41000: [330, 0.90],
    42000: [339, 0.90],
    43000: [348, 0.90],
    44000: [357, 1.00],
    45000: [367, 0.94],
    46000: [376, 0.92],
    47000: [385, 0.92],
    48000: [394, 0.92],
    49000: [403, 0.94],
    50000: [412, 0.94],
    51000: [421, 0.94],
    52000: [430, 0.92],
    53000: [439, 0.92],
    54000: [448, 0.90],
    55000: [457, 0.98],
    56000: [467, 0.92],
    57000: [476, 0.96],
    58000: [486, 0.98],
    59000: [496, 0.92],
    60000: [505, 0.96],
    61000: [515, 1.00],
    62000: [525, 0.92],
    63000: [534, 0.96],
    64000: [544, 1.00],
    65000: [554, 0.94],
    66000: [563, 0.96],
    67000: [573, 1.00],
    68000: [583, 0.94],
    69000: [592, 0.96],
    70000: [602, 1.00],
    71000: [612, 0.94],
    72000: [621, 0.98],
    73000: [631, 1.00],
    74000: [641, 0.94],
    75000: [650, 0.98],
    76000: [660, 1.02],
    77000: [670, 0.94],
    78000: [679, 0.98],
    79000: [689, 0.92],
    80000: [698, 0.96],
    81000: [708, 0.98],
    82000: [718, 0.92],
    83000: [727, 0.96],
    84000: [737, 1.00],
    85000: [747, 0.92],
    86000: [756, 0.96],
    87000: [766, 1.00],
    88000: [776, 0.92],
    89000: [785, 0.96],
    90000: [795, 0.90],
    91000: [804, 0.86],
    92000: [813, 0.88],
    93000: [822, 0.88],
    94000: [831, 0.90],
    95000: [840, 0.92],
    96000: [849, 0.92],
    97000: [858, 0.94],
    98000: [867, 0.84],
    99000: [875, 0.86],
    100000: [884, 0.86],
    101000: [893, 0.88],
    102000: [902, 0.88],
    103000: [911, 0.90],
    104000: [920, 0.92],
    105000: [929, 0.92],
    106000: [938, 0.94],
    107000: [947, 0.84],
    108000: [955, 0.86],
    109000: [964, 0.86],
    110000: [973, 0.88],
    111000: [982, 0.88],
    112000: [991, 0.90],
    113000: [1000, 0.92],
    114000: [1009, 0.92],
    115000: [1018, 0.94],
    116000: [1027, 0.84],
    117000: [1035, 0.86],
    118000: [1044, 0.86],
    119000: [1053, 0.88],
    120000: [1062, 0.88],
    121000: [1071, 0.90],
    122000: [1080, 0.92],
    123000: [1089, 0.92],
    124000: [1098, 0.94],
    125000: [1107, 0.84],
    126000: [1115, 0.88],
    127000: [1124, 0.82],
    128000: [1132, 0.86],
    129000: [1141, 0.90],
    130000: [1150, 0.84],
    131000: [1158, 0.88],
    132000: [1167, 0.82],
    133000: [1175, 0.86],
    134000: [1184, 0.90],
    135000: [1193, 0.84],
    136000: [1201, 0.88],
    137000: [1210, 0.82],
    138000: [1218, 0.86],
    139000: [1227, 0.88],
    140000: [1236, 0.82],
    141000: [1244, 0.80],
    142000: [1252, 0.78],
    143000: [1260, 0.86],
    144000: [1269, 0.84],
    145000: [1277, 0.82],
    146000: [1285, 0.80],
    147000: [1293, 0.78],
    148000: [1301, 0.86],
    149000: [1310, 0.84],
    150000: [1318, 0.84]
}

var twoKid = { // lookup table for 2 kids
    12000: [000, 8.90],
    13000: [089, 3.86],
    14000: [128, 3.60],
    15000: [164, 3.60],
    16000: [200, 3.52],
    17000: [235, 3.44],
    18000: [269, 3.46],
    19000: [304, 2.38],
    20000: [328, 1.26],
    21000: [341, 1.22],
    22000: [353, 1.26],
    23000: [366, 1.20],
    24000: [378, 1.26],
    25000: [391, 1.40],
    26000: [405, 1.72],
    27000: [422, 1.62],
    28000: [438, 1.18],
    29000: [450, 1.26],
    30000: [463, 1.24],
    31000: [475, 1.22],
    32000: [487, 1.20],
    33000: [499, 1.18],
    34000: [511, 1.26],
    35000: [524, 1.22],
    36000: [536, 1.14],
    37000: [547, 1.12],
    38000: [558, 1.12],
    39000: [569, 1.30],
    40000: [582, 1.42],
    41000: [596, 1.42],
    42000: [610, 1.42],
    43000: [624, 1.42],
    44000: [638, 1.50],
    45000: [653, 1.40],
    46000: [667, 1.38],
    47000: [681, 1.40],
    48000: [695, 1.40],
    49000: [709, 1.42],
    50000: [723, 1.42],
    51000: [737, 1.42],
    52000: [751, 1.40],
    53000: [765, 1.38],
    54000: [779, 1.46],
    55000: [794, 1.52],
    56000: [809, 1.52],
    57000: [824, 1.52],
    58000: [839, 1.52],
    59000: [854, 1.52],
    60000: [869, 1.52],
    61000: [884, 1.52],
    62000: [899, 1.52],
    63000: [914, 1.52],
    64000: [929, 1.52],
    65000: [944, 1.52],
    66000: [959, 1.52],
    67000: [974, 1.52],
    68000: [989, 1.50],
    69000: [1004, 1.50],
    70000: [1019, 1.50],
    71000: [1034, 1.50],
    72000: [1049, 1.50],
    73000: [1064, 1.50],
    74000: [1079, 1.50],
    75000: [1094, 1.50],
    76000: [1109, 1.50],
    77000: [1124, 1.50],
    78000: [1139, 1.50],
    79000: [1154, 1.50],
    80000: [1169, 1.50],
    81000: [1184, 1.48],
    82000: [1199, 1.48],
    83000: [1214, 1.48],
    84000: [1229, 1.48],
    85000: [1244, 1.48],
    86000: [1259, 1.48],
    87000: [1274, 1.48],
    88000: [1289, 1.48],
    89000: [1304, 1.48],
    90000: [1319, 1.48],
    91000: [1334, 1.42],
    92000: [1348, 1.34],
    93000: [1361, 1.36],
    94000: [1375, 1.38],
    95000: [1389, 1.40],
    96000: [1403, 1.42],
    97000: [1417, 1.44],
    98000: [1431, 1.34],
    99000: [1444, 1.36],
    100000: [1458, 1.38],
    101000: [1472, 1.40],
    102000: [1486, 1.42],
    103000: [1500, 1.34],
    104000: [1513, 1.36],
    105000: [1527, 1.36],
    106000: [1541, 1.38],
    107000: [1555, 1.40],
    108000: [1569, 1.42],
    109000: [1583, 1.34],
    110000: [1596, 1.36],
    111000: [1610, 1.38],
    112000: [1624, 1.38],
    113000: [1638, 1.40],
    114000: [1652, 1.42],
    115000: [1666, 1.34],
    116000: [1679, 1.36],
    117000: [1693, 1.38],
    118000: [1707, 1.40],
    119000: [1721, 1.42],
    120000: [1735, 1.42],
    121000: [1749, 1.34],
    122000: [1762, 1.36],
    123000: [1776, 1.38],
    124000: [1790, 1.40],
    125000: [1804, 1.32],
    126000: [1817, 1.38],
    127000: [1831, 1.34],
    128000: [1844, 1.30],
    129000: [1857, 1.36],
    130000: [1871, 1.32],
    131000: [1884, 1.38],
    132000: [1898, 1.34],
    133000: [1911, 1.30],
    134000: [1924, 1.36],
    135000: [1938, 1.32],
    136000: [1951, 1.38],
    137000: [1965, 1.34],
    138000: [1978, 1.30],
    139000: [1991, 1.36],
    140000: [2005, 1.32],
    141000: [2018, 1.32],
    142000: [2031, 1.24],
    143000: [2043, 1.28],
    144000: [2056, 1.30],
    145000: [2069, 1.32],
    146000: [2082, 1.24],
    147000: [2094, 1.28],
    148000: [2107, 1.30],
    149000: [2120, 1.32],
    150000: [2133, 1.32]
}

var threeKid = { // lookup table for 3 kids
    12000: [000, 9.60],
    13000: [096, 4.18],
    14000: [138, 3.90],
    15000: [177, 3.84],
    16000: [215, 3.78],
    17000: [253, 3.72],
    18000: [290, 3.78],
    19000: [328, 3.74],
    20000: [365, 4.06],
    21000: [406, 4.08],
    22000: [447, 4.10],
    23000: [488, 2.82],
    24000: [516, 1.68],
    25000: [533, 1.88],
    26000: [552, 2.14],
    27000: [573, 2.04],
    28000: [593, 1.68],
    29000: [610, 1.70],
    30000: [627, 1.72],
    31000: [644, 1.64],
    32000: [660, 1.66],
    33000: [677, 1.68],
    34000: [694, 1.70],
    35000: [711, 1.62],
    36000: [727, 1.58],
    37000: [743, 1.52],
    38000: [758, 1.58],
    39000: [774, 1.74],
    40000: [791, 1.84],
    41000: [809, 1.84],
    42000: [827, 1.84],
    43000: [845, 1.84],
    44000: [863, 1.92],
    45000: [882, 1.80],
    46000: [900, 1.78],
    47000: [918, 1.78],
    48000: [936, 1.80],
    49000: [954, 1.82],
    50000: [972, 1.82],
    51000: [990, 1.82],
    52000: [1008, 1.80],
    53000: [1026, 1.88],
    54000: [1045, 1.84],
    55000: [1063, 1.90],
    56000: [1082, 1.98],
    57000: [1102, 1.94],
    58000: [1121, 1.92],
    59000: [1140, 1.88],
    60000: [1159, 1.96],
    61000: [1179, 1.92],
    62000: [1198, 1.90],
    63000: [1217, 1.96],
    64000: [1237, 1.94],
    65000: [1256, 1.90],
    66000: [1275, 1.98],
    67000: [1295, 1.94],
    68000: [1314, 1.90],
    69000: [1333, 1.98],
    70000: [1353, 1.94],
    71000: [1372, 1.92],
    72000: [1391, 1.88],
    73000: [1410, 1.96],
    74000: [1430, 1.92],
    75000: [1449, 1.90],
    76000: [1468, 1.96],
    77000: [1488, 1.94],
    78000: [1507, 1.90],
    79000: [1526, 1.98],
    80000: [1546, 1.94],
    81000: [1565, 1.92],
    82000: [1584, 1.88],
    83000: [1603, 1.96],
    84000: [1623, 1.92],
    85000: [1642, 1.90],
    86000: [1661, 1.96],
    87000: [1681, 1.92],
    88000: [1700, 1.90],
    89000: [1719, 1.96],
    90000: [1739, 1.84],
    91000: [1757, 1.78],
    92000: [1775, 1.80],
    93000: [1793, 1.82],
    94000: [1811, 1.74],
    95000: [1828, 1.76],
    96000: [1846, 1.78],
    97000: [1864, 1.80],
    98000: [1882, 1.74],
    99000: [1899, 1.76],
    100000: [1917, 1.78],
    101000: [1935, 1.80],
    102000: [1953, 1.82],
    103000: [1971, 1.74],
    104000: [1988, 1.76],
    105000: [2006, 1.78],
    106000: [2024, 1.80],
    107000: [2042, 1.74],
    108000: [2059, 1.76],
    109000: [2077, 1.78],
    110000: [2095, 1.80],
    111000: [2113, 1.82],
    112000: [2131, 1.74],
    113000: [2148, 1.76],
    114000: [2166, 1.78],
    115000: [2184, 1.80],
    116000: [2202, 1.74],
    117000: [2219, 1.76],
    118000: [2237, 1.78],
    119000: [2255, 1.80],
    120000: [2273, 1.82],
    121000: [2291, 1.74],
    122000: [2308, 1.76],
    123000: [2326, 1.78],
    124000: [2344, 1.80],
    125000: [2362, 1.74],
    126000: [2379, 1.70],
    127000: [2396, 1.68],
    128000: [2413, 1.76],
    129000: [2431, 1.74],
    130000: [2448, 1.72],
    131000: [2465, 1.70],
    132000: [2482, 1.68],
    133000: [2499, 1.76],
    134000: [2517, 1.74],
    135000: [2534, 1.70],
    136000: [2551, 1.68],
    137000: [2568, 1.76],
    138000: [2586, 1.74],
    139000: [2603, 1.72],
    140000: [2620, 1.70],
    141000: [2637, 1.62],
    142000: [2653, 1.68],
    143000: [2670, 1.64],
    144000: [2686, 1.60],
    145000: [2702, 1.66],
    146000: [2719, 1.64],
    147000: [2735, 1.60],
    148000: [2751, 1.66],
    149000: [2768, 1.62],
    150000: [2784, 1.62]
}

var fourKid = { // lookup table for 4 kids
    12000: [000, 10.3],
    13000: [103, 4.48],
    14000: [148, 4.12],
    15000: [189, 4.18],
    16000: [231, 4.04],
    17000: [271, 4.02],
    18000: [311, 4.02],
    19000: [351, 4.10],
    20000: [392, 4.34],
    21000: [435, 4.38],
    22000: [479, 4.42],
    23000: [523, 4.34],
    24000: [566, 4.38],
    25000: [610, 4.40],
    26000: [654, 4.24],
    27000: [696, 2.40],
    28000: [720, 2.10],
    29000: [741, 2.04],
    30000: [761, 2.08],
    31000: [782, 2.04],
    32000: [802, 2.08],
    33000: [823, 2.02],
    34000: [843, 2.06],
    35000: [864, 2.00],
    36000: [884, 1.88],
    37000: [903, 1.90],
    38000: [922, 1.90],
    39000: [941, 2.00],
    40000: [961, 2.18],
    41000: [983, 2.14],
    42000: [1004, 2.12],
    43000: [1025, 2.18],
    44000: [1047, 2.24],
    45000: [1069, 2.18],
    46000: [1091, 2.10],
    47000: [1112, 2.10],
    48000: [1133, 2.08],
    49000: [1154, 2.06],
    50000: [1175, 2.16],
    51000: [1197, 2.14],
    52000: [1218, 2.18],
    53000: [1240, 2.12],
    54000: [1261, 2.16],
    55000: [1283, 2.28],
    56000: [1306, 2.30],
    57000: [1329, 2.32],
    58000: [1352, 2.24],
    59000: [1374, 2.26],
    60000: [1397, 2.28],
    61000: [1420, 2.30],
    62000: [1443, 2.30],
    63000: [1466, 2.32],
    64000: [1489, 2.24],
    65000: [1511, 2.26],
    66000: [1534, 2.28],
    67000: [1557, 2.30],
    68000: [1580, 2.32],
    69000: [1603, 2.24],
    70000: [1625, 2.26],
    71000: [1648, 2.28],
    72000: [1671, 2.30],
    73000: [1694, 2.32],
    74000: [1717, 2.32],
    75000: [1740, 2.24],
    76000: [1762, 2.26],
    77000: [1785, 2.28],
    78000: [1808, 2.30],
    79000: [1831, 2.32],
    80000: [1854, 2.24],
    81000: [1876, 2.26],
    82000: [1899, 2.28],
    83000: [1922, 2.30],
    84000: [1945, 2.32],
    85000: [1968, 2.24],
    86000: [1990, 2.26],
    87000: [2013, 2.26],
    88000: [2036, 2.28],
    89000: [2059, 2.30],
    90000: [2082, 2.22],
    91000: [2104, 2.12],
    92000: [2125, 2.12],
    93000: [2146, 2.12],
    94000: [2167, 2.12],
    95000: [2188, 2.12],
    96000: [2209, 2.12],
    97000: [2230, 2.12],
    98000: [2251, 2.12],
    99000: [2272, 2.12],
    100000:	[2293, 2.12],
    101000:	[2314, 2.12],
    102000:	[2335, 2.12],
    103000:	[2356, 2.12],
    104000:	[2377, 2.12],
    105000:	[2398, 2.10],
    106000:	[2419, 2.10],
    107000:	[2440, 2.10],
    108000:	[2461, 2.10],
    109000:	[2482, 2.10],
    110000:	[2503, 2.10],
    111000:	[2524, 2.10],
    112000:	[2545, 2.10],
    113000:	[2566, 2.10],
    114000:	[2587, 2.10],
    115000:	[2608, 2.10],
    116000:	[2629, 2.10],
    117000:	[2650, 2.10],
    118000:	[2671, 2.10],
    119000:	[2692, 2.10],
    120000:	[2713, 2.10],
    121000:	[2734, 2.10],
    122000:	[2755, 2.10],
    123000:	[2776, 2.10],
    124000:	[2797, 2.08],
    125000:	[2818, 1.98],
    126000:	[2838, 2.06],
    127000:	[2859, 2.02],
    128000:	[2879, 2.08],
    129000:	[2900, 2.04],
    130000:	[2920, 2.02],
    131000:	[2940, 2.08],
    132000:	[2961, 2.04],
    133000:	[2981, 2.00],
    134000:	[3001, 2.08],
    135000:	[3022, 2.04],
    136000:	[3042, 2.00],
    137000:	[3062, 2.06],
    138000:	[3083, 2.02],
    139000:	[3103, 2.00],
    140000:	[3123, 1.96],
    141000:	[3143, 1.98],
    142000:	[3163, 1.94],
    143000:	[3182, 1.90],
    144000:	[3201, 1.98],
    145000:	[3221, 1.94],
    146000:	[3240, 1.90],
    147000:	[3259, 1.96],
    148000:	[3279, 1.92],
    149000:	[3298, 1.88],
    150000:	[3317, 1.88]
}

const childSupport = (x, y) => { // declare main function
    if (x < 12000 ) {
        return 0;  // immediately exit if income is less than 12000
    }
    
    const topUp = (a, x, c, d) => a + (( x - c ) * ( d / 100 )); // calculate support at income and kid thresholds
    const getYKid = { 1: oneKid, 2: twoKid, 3: threeKid, 4: fourKid } // condense lookup tables into array
    const yKid = getYKid[y]; // point to applicable lookup table

    if ( x >= 150000 ) {
        return topUp(yKid[150000][0], x, 150000, yKid[150000][1]); // check if income is greater than 150000 -> if so, calculate
    }

    const floor = (x) => Math.floor(x/1000)*1000; // variable for finding the lower bound of a specific income imterval
    const xFloor = floor(x); // calculate floor for any given income and set it to a variable
    const base = yKid[xFloor][0]; // find the base support for any given income interval lower bound
    const margin = yKid[xFloor][1]; // find the marginal percentage for every dollar over the income interval lower bound

    return topUp(base, x, xFloor, margin); // calculate total support payable at given variables
}

childSupportTest = (income, kids, expected) => { // test whether inputs return expected results
    if (childSupport(income, kids) != expected) {
        console.log("csCheck: failed")
        return
    }
    console.log("csCheck: passed")
}

childSupportTest(137643, 1, 1215.2726);
childSupportTest(137643, 2, 1973.6162);
childSupportTest(137643, 3, 2579.3168);
childSupportTest(137643, 4, 3075.2458);

console.log(`There are ${numKids} kids.`); // print number of kids

console.log(`Dad's Guideline income is ${dadIncome.toLocaleString('en-CA', {style: 'currency', currency: 'CAD'})}.`); // print Dad's income
console.log(`Mom's Guideline income is ${momIncome.toLocaleString('en-CA', {style: 'currency', currency: 'CAD'})}.`); // print Mom's income

const dadSupport = childSupport(dadIncome, numKids); // set Dad's support
const momSupport = childSupport(momIncome, numKids); // set Mom's support

console.log(`Dad's section 3 table amount: ${dadSupport.toLocaleString('en-CA', {style: 'currency', currency: 'CAD'})}`); // print Dad's support
console.log(`Mom's section 3 table amount: ${momSupport.toLocaleString('en-CA', {style: 'currency', currency: 'CAD'})}`); // print Mom's support

const dadSection7 = (dadIncome, momIncome) => dadIncome / (dadIncome + momIncome); // determine Dad's proportionate contribution to section 7 expenses
const momSection7 = (dadIncome, momIncome) => momIncome / (dadIncome + momIncome); // determine Mom's proportionate contribution to section 7 expenses

console.log(`Dad's section 7 proportion: ${dadSection7(dadIncome, momIncome).toLocaleString('en-CA', {style: 'percent'})}.`); // print Dad's section 7 proportion
console.log(`Mom's section 7 proportion: ${momSection7(dadIncome, momIncome).toLocaleString('en-CA', {style: 'percent'})}.`); // print Mom's section 7 proportion

const setOff = (dadIncome, momIncome, numKids) => { // determine offset support owing where parenting is shared
    if (!sharedParenting) {
        console.log("Parenting is not shared.")
        return
    }
    if (dadIncome > momIncome) {
        let dadPays = childSupport(dadIncome, numKids) - childSupport(momIncome, numKids)
        console.log(`Parenting is shared. Dad pays ${dadPays.toLocaleString('en-CA', { style: 'currency', currency: 'CAD'})}.`)
        return
    } 
    if (momIncome > dadIncome) {
        let momPays = childSupport(momIncome, numKids) - childSupport(dadIncome, numKids)
        console.log(`Parenting is shared. Mom pays ${momPays.toLocaleString('en-CA', { style: 'currency', currency: 'CAD'})}.`)
        return
    }
    console.log("Parenting is shared. No Support Payable.")
}

setOff(dadIncome, momIncome, numKids); // print the offset support amount
