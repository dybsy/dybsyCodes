let [, , dadIncome, momIncome, numKids, sharedParenting] = process.argv; // bring in arguments from console input
dadIncome = +dadIncome; // convert argv string argument to a number primitive 
momIncome = +momIncome; // convert argv string argument to a number primitive 
numKids = +numKids; // convert argv string argument to a number primitive 
sharedParenting = (sharedParenting === 'true'); // convert argv string argument to a boolean string

const childSupport = (x, y) => { // calculate child support payable at either dad or mom's income given the amount of kids
    const topUp = (a, x, c, d) => a + (( x - c ) * ( d / 100 )); // support calculation
    switch (y) { // switch between support tables based on number of kids (up to 4 kids total)
    case 1: // each case applies topUp within an if statement for each $1,000 increment of income in accordance with legislation
        if ( x < 12000 ) {
            return 0
        }
        if ( x <= 12999 ) {
            return topUp(0, x, 12000, 8.30)
        }
        if ( x <= 13999 ) {
            return topUp(83, x, 13000, 3.54) 
        }
        if ( x <= 14999 ) {
            return topUp(118, x, 14000, 0.98)
        }
        if ( x <= 15999 ) {
            return topUp(128, x, 15000, 1.06)
        }	
        if ( x <= 16999 ) {
            return topUp(139, x, 16000, 1.02)
        }	
        if ( x <= 17999 ) {
            return topUp(149, x, 17000, 1.00)
        }
        if ( x <= 18999 ) {
            return topUp(159, x, 18000, 1.08)
        }	
        if ( x <= 19999 ) {
            return topUp(170, x, 19000, 0.94)
        }	
        if ( x <= 20999 ) {
            return topUp(179, x, 20000, 0.68)
        }	
        if ( x <= 21999 ) {
            return topUp(186, x, 21000, 0.70)
        }	
        if ( x <= 22999 ) {
            return topUp(193, x, 22000, 0.72)
        }	
        if ( x <= 23999 ) {
            return topUp(200, x, 23000, 0.64)
        }	
        if ( x <= 24999 ) {
            return topUp(206, x, 24000, 0.66)
        }	
        if ( x <= 25999 ) {
            return topUp(213, x, 25000, 0.88)
        }	
        if ( x <= 26999 ) {
            return topUp(222, x, 26000, 1.14)
        }	
        if ( x <= 27999 ) {
            return topUp(233, x, 27000, 1.08)
        }	
        if ( x <= 28999 ) {
            return topUp(244, x, 28000, 0.66)
        }	
        if ( x <= 29999 ) {
            return topUp(251, x, 29000, 0.60)
        }	
        if ( x <= 30999 ) {
            return topUp(257, x, 30000, 0.66)
        }	
        if ( x <= 31999 ) {
            return topUp(264, x, 31000, 0.62)
        }    
        if ( x <= 32999 ) {
            return topUp(270, x, 32000, 0.66)
        }	
        if ( x <= 33999 ) {
            return topUp(277, x, 33000, 0.62)
        }	
        if ( x <= 34999 ) {
            return topUp(283, x, 34000, 0.68)
        }	
        if ( x <= 35999 ) {
            return topUp(290, x, 35000, 0.62)
        }	
        if ( x <= 36999 ) {
            return topUp(296, x, 36000, 0.60)
        }	
        if ( x <= 37999 ) {
            return topUp(302, x, 37000, 0.62)
        }	
        if ( x <= 38999 ) {
            return topUp(308, x, 38000, 0.54)
        }	
        if ( x <= 39999 ) {
            return topUp(313, x, 39000, 0.76)
        }	
        if ( x <= 40999 ) {
            return topUp(321, x, 40000, 0.90)
        }	
        if ( x <= 41999 ) {
            return topUp(330, x, 41000, 0.90)
        }    
        if ( x <= 42999 ) {
            return topUp(339, x, 42000, 0.90)
        }	
        if ( x <= 43999 ) {
            return topUp(348, x, 43000, 0.90)
        }	
        if ( x <= 44999 ) {
            return topUp(357, x, 44000, 1.00)
        }	
        if ( x <= 45999 ) {
            return topUp(367, x, 45000, 0.94)
        }	
        if ( x <= 46999 ) {
            return topUp(376, x, 46000, 0.92)
        }	
        if ( x <= 47999 ) {
            return topUp(385, x, 47000, 0.92)
        }	
        if ( x <= 48999 ) {
            return topUp(394, x, 48000, 0.92)
        }	
        if ( x <= 49999 ) {
            return topUp(403, x, 49000, 0.94)
        }	
        if ( x <= 50999 ) {
            return topUp(412, x, 50000, 0.94)
        }	
        if ( x <= 51999 ) {
            return topUp(421, x, 51000, 0.94)
        }	
        if ( x <= 52999 ) {
            return topUp(430, x, 52000, 0.92)
        }	
        if ( x <= 53999 ) {
            return topUp(439, x, 53000, 0.92)
        }	
        if ( x <= 54999 ) {
            return topUp(448, x, 54000, 0.90)
        }	
        if ( x <= 55999 ) {
            return topUp(457, x, 55000, 0.98)
        }	
        if ( x <= 56999 ) {
            return topUp(467, x, 56000, 0.92)
        }	
        if ( x <= 57999 ) {
            return topUp(476, x, 57000, 0.96)
        }	
        if ( x <= 58999 ) {
            return topUp(486, x, 58000, 0.98)
        }	
        if ( x <= 59999 ) {
            return topUp(496, x, 59000, 0.92)
        }
        if ( x <= 60999 ) {
            return topUp(505, x, 60000, 0.96)
        }	
        if ( x <= 61999 ) {
            return topUp(515, x, 61000, 1.00)
        }	
        if ( x <= 62999 ) {
            return topUp(525, x, 62000, 0.92)
        }	
        if ( x <= 63999 ) {
            return topUp(534, x, 63000, 0.96)
        }	
        if ( x <= 64999 ) {
            return topUp(544, x, 64000, 1.00)
        }	
        if ( x <= 65999 ) {
            return topUp(554, x, 65000, 0.94)
        }	
        if ( x <= 66999 ) {
            return topUp(563, x, 66000, 0.96)
        }	
        if ( x <= 67999 ) {
            return topUp(573, x, 67000, 1.00)
        }	
        if ( x <= 68999 ) {
            return topUp(583, x, 68000, 0.94)
        }	
        if ( x <= 69999 ) {
            return topUp(592, x, 69000, 0.96)
        }	
        if ( x <= 70999 ) {
            return topUp(602, x, 70000, 1.00)
        }	
        if ( x <= 71999 ) {
            return topUp(612, x, 71000, 0.94)
        }	
        if ( x <= 72999 ) {
            return topUp(621, x, 72000, 0.98)
        }	
        if ( x <= 73999 ) {
            return topUp(631, x, 73000, 1.00)
        }	
        if ( x <= 74999 ) {
            return topUp(641, x, 74000, 0.94)
        }	
        if ( x <= 75999 ) {
            return topUp(650, x, 75000, 0.98)
        }	
        if ( x <= 76999 ) {
            return topUp(660, x, 76000, 1.02)
        }	
        if ( x <= 77999 ) {
            return topUp(670, x, 77000, 0.94)
        }	
        if ( x <= 78999 ) {
            return topUp(679, x, 78000, 0.98)
        }	
        if ( x <= 79999 ) {
            return topUp(689, x, 79000, 0.92)
        }	
        if ( x <= 80999 ) {
            return topUp(698, x, 80000, 0.96)
        }	
        if ( x <= 81999 ) {
            return topUp(708, x, 81000, 0.98)
        }	
        if ( x <= 82999 ) {
            return topUp(718, x, 82000, 0.92)
        }	
        if ( x <= 83999 ) {
            return topUp(727, x, 83000, 0.96)
        }	
        if ( x <= 84999 ) {
            return topUp(737, x, 84000, 1.00)
        }	
        if ( x <= 85999 ) {
            return topUp(747, x, 85000, 0.92)
        }	
        if ( x <= 86999 ) {
            return topUp(756, x, 86000, 0.96)
        }	
        if ( x <= 87999 ) {
            return topUp(766, x, 87000, 1.00)
        }	
        if ( x <= 88999 ) {
            return topUp(776, x, 88000, 0.92)
        }	
        if ( x <= 89999 ) {
            return topUp(785, x, 89000, 0.96)
        }	
        if ( x <= 90999 ) {
            return topUp(795, x, 90000, 0.90)
        }	
        if ( x <= 91999 ) {
            return topUp(804, x, 91000, 0.86)
        }	
        if ( x <= 92999 ) {
            return topUp(813, x, 92000, 0.88)
        }	
        if ( x <= 93999 ) {
            return topUp(822, x, 93000, 0.88)
        }	
        if ( x <= 94999 ) {
            return topUp(831, x, 94000, 0.90)
        }	
        if ( x <= 95999 ) {
            return topUp(840, x, 95000, 0.92)
        }	
        if ( x <= 96999 ) {
            return topUp(849, x, 96000, 0.92)
        }	
        if ( x <= 97999 ) {
            return topUp(858, x, 97000, 0.94)
        }	
        if ( x <= 98999 ) {
            return topUp(867, x, 98000, 0.84)
        }	
        if ( x <= 99999 ) {
            return topUp(875, x, 99000, 0.86)
        }	
        if ( x <= 100999 ) {
            return topUp(884, x, 100000, 0.86)
        }	
        if ( x <= 101999 ) {
            return topUp(893, x, 101000, 0.88)
        }	
        if ( x <= 102999 ) {
            return topUp(902, x, 102000, 0.88)
        }	
        if ( x <= 103999 ) {
            return topUp(911, x, 103000, 0.90)
        }	
        if ( x <= 104999 ) {
            return topUp(920, x, 104000, 0.92)
        }	
        if ( x <= 105999 ) {
            return topUp(929, x, 105000, 0.92)
        }	
        if ( x <= 106999 ) {
            return topUp(938, x, 106000, 0.94)
        }
        if ( x <= 107999 ) {
            return topUp(947, x, 107000, 0.84)
        }	
        if ( x <= 108999 ) {
            return topUp(955, x, 108000, 0.86)
        }	
        if ( x <= 109999 ) {
            return topUp(964, x, 109000, 0.86)
        }	
        if ( x <= 110999 ) {
            return topUp(973, x, 110000, 0.88)
        }	
        if ( x <= 111999 ) {
            return topUp(982, x, 111000, 0.88)
        }	
        if ( x <= 112999 ) {
            return topUp(991, x, 112000, 0.90)
        }	
        if ( x <= 113999 ) {
            return topUp(1000, x, 113000, 0.92)
        }	
        if ( x <= 114999 ) {
            return topUp(1009, x, 114000, 0.92)
        }	
        if ( x <= 115999 ) {
            return topUp(1018, x, 115000, 0.94)
        }	
        if ( x <= 116999 ) {
            return topUp(1027, x, 116000, 0.84)
        }	
        if ( x <= 117999 ) {
            return topUp(1035, x, 117000, 0.86)
        }	
        if ( x <= 118999 ) {
            return topUp(1044, x, 118000, 0.86)
        }	
        if ( x <= 119999 ) {
            return topUp(1053, x, 119000, 0.88)
        }	
        if ( x <= 120999 ) {
            return topUp(1062, x, 120000, 0.88)
        }	
        if ( x <= 121999 ) {
            return topUp(1071, x, 121000, 0.90)
        }	
        if ( x <= 122999 ) {
            return topUp(1080, x, 122000, 0.92)
        }	
        if ( x <= 123999 ) {
            return topUp(1089, x, 123000, 0.92)
        }	
        if ( x <= 124999 ) {
            return topUp(1098, x, 124000, 0.94)
        }
        if ( x <= 125999 ) {
            return topUp(1107, x, 125000, 0.84)
        }	
        if ( x <= 126999 ) {
            return topUp(1115, x, 126000, 0.88)
        }	
        if ( x <= 127999 ) {
            return topUp(1124, x, 127000, 0.82)
        }	
        if ( x <= 128999 ) {
            return topUp(1132, x, 128000, 0.86)
        }	
        if ( x <= 129999 ) {
            return topUp(1141, x, 129000, 0.90)
        }	
        if ( x <= 130999 ) {
            return topUp(1150, x, 130000, 0.84)
        }	
        if ( x <= 131999 ) {
            return topUp(1158, x, 131000, 0.88)
        }	
        if ( x <= 132999 ) {
            return topUp(1167, x, 132000, 0.82)
        }	
        if ( x <= 133999 ) {
            return topUp(1175, x, 133000, 0.86)
        }	
        if ( x <= 134999 ) {
            return topUp(1184, x, 134000, 0.90)
        }	
        if ( x <= 135999 ) {
            return topUp(1193, x, 135000, 0.84)
        }	
        if ( x <= 136999 ) {
            return topUp(1201, x, 136000, 0.88)
        }	
        if ( x <= 137999 ) {
            return topUp(1210, x, 137000, 0.82)
        }	
        if ( x <= 138999 ) {
            return topUp(1218, x, 138000, 0.86)
        }	
        if ( x <= 139999 ) {
            return topUp(1227, x, 139000, 0.88)
        }	
        if ( x <= 140999 ) {
            return topUp(1236, x, 140000, 0.82)
        }	
        if ( x <= 141999 ) {
            return topUp(1244, x, 141000, 0.80)
        }	
        if ( x <= 142999 ) {
            return topUp(1252, x, 142000, 0.78)
        }
        if ( x <= 143999 ) {
            return topUp(1260, x, 143000, 0.86)
        }
        if ( x <= 144999 ) {
            return topUp(1269, x, 144000, 0.84)
        }
        if ( x <= 145999 ) {
            return topUp(1277, x, 145000, 0.82)
        }
        if ( x <= 146999 ) {
            return topUp(1285, x, 146000, 0.80)
        }
        if ( x <= 147999 ) {
            return topUp(1293, x, 147000, 0.78)
        }
        if ( x <= 148999 ) {
            return topUp(1301, x, 148000, 0.86)
        }
        if ( x <= 149999 ) {
            return topUp(1310, x, 149000, 0.84)
        }
        if ( x >= 150000	) {
            return topUp(1318, x, 150000, 0.84)
        }
    case 2:
        if ( x <= 12999 ) {
            return topUp(0, x, 12000, 8.90)
        }
        if ( x <= 13999 ) {
            return topUp(89, x, 13000, 3.86)
        }
        if ( x <= 14999 ) {
            return topUp(128, x, 14000, 3.60)
        }	
        if ( x <= 15999 ) {
            return topUp(164, x, 15000, 3.60)
        }	
        if ( x <= 16999 ) {
            return topUp(200, x, 16000, 3.52)
        }	
        if ( x <= 17999 ) {
            return topUp(235, x, 17000, 3.44)
        }	
        if ( x <= 18999 ) {
            return topUp(269, x, 18000, 3.46)
        }	
        if ( x <= 19999 ) {
            return topUp(304, x, 19000, 2.38)
        }	
        if ( x <= 20999 ) {
            return topUp(328, x, 20000, 1.26)
        }	
        if ( x <= 21999 ) {
            return topUp(341, x, 21000, 1.22)
        }	
        if ( x <= 22999 ) {
            return topUp(353, x, 22000, 1.26)
        }	
        if ( x <= 23999 ) {
            return topUp(366, x, 23000, 1.20)
        }	
        if ( x <= 24999 ) {
            return topUp(378, x, 24000, 1.26)
        }	
        if ( x <= 25999 ) {
            return topUp(391, x, 25000, 1.40)
        }    
        if ( x <= 26999 ) {
            return topUp(405, x, 26000, 1.72)
        }	
        if ( x <= 27999 ) {
            return topUp(422, x, 27000, 1.62)
        }	
        if ( x <= 28999 ) {
            return topUp(438, x, 28000, 1.18)
        }	
        if ( x <= 29999 ) {
            return topUp(450, x, 29000, 1.26)
        }	
        if ( x <= 30999 ) {
            return topUp(463, x, 30000, 1.24)
        }	
        if ( x <= 31999 ) {
            return topUp(475, x, 31000, 1.22)
        }	
        if ( x <= 32999 ) {
            return topUp(487, x, 32000, 1.20)
        }	
        if ( x <= 33999 ) {
            return topUp(499, x, 33000, 1.18)
        }	
        if ( x <= 34999 ) {
            return topUp(511, x, 34000, 1.26)
        }	
        if ( x <= 35999 ) {
            return topUp(524, x, 35000, 1.22)
        }	
        if ( x <= 36999 ) {
            return topUp(536, x, 36000, 1.14)
        }	
        if ( x <= 37999 ) {
            return topUp(547, x, 37000, 1.12)
        }	
        if ( x <= 38999 ) {
            return topUp(558, x, 38000, 1.12)
        }	
        if ( x <= 39999 ) {
            return topUp(569, x, 39000, 1.30)
        }	
        if ( x <= 40999 ) {
            return topUp(582, x, 40000, 1.42)
        }	
        if ( x <= 41999 ) {
            return topUp(596, x, 41000, 1.42)
        }	
        if ( x <= 42999 ) {
            return topUp(610, x, 42000, 1.42)
        }	
        if ( x <= 43999 ) {
            return topUp(624, x, 43000, 1.42)
        }	
        if ( x <= 44999 ) {
            return topUp(638, x, 44000, 1.50)
        }	
        if ( x <= 45999 ) {
            return topUp(653, x, 45000, 1.40)
        }	
        if ( x <= 46999 ) {
            return topUp(667, x, 46000, 1.38)
        }	
        if ( x <= 47999 ) {
            return topUp(681, x, 47000, 1.40)
        }    
        if ( x <= 48999 ) {
            return topUp(695, x, 48000, 1.40)
        }	
        if ( x <= 49999 ) {
            return topUp(709, x, 49000, 1.42)
        }	
        if ( x <= 50999 ) {
            return topUp(723, x, 50000, 1.42)
        }	
        if ( x <= 51999 ) {
            return topUp(737, x, 51000, 1.42)
        }	
        if ( x <= 52999 ) {
            return topUp(751, x, 52000, 1.40)
        }	
        if ( x <= 53999 ) {
            return topUp(765, x, 53000, 1.38)
        }	
        if ( x <= 54999 ) {
            return topUp(779, x, 54000, 1.46)
        }	
        if ( x <= 55999 ) {
            return topUp(794, x, 55000, 1.52)
        }	
        if ( x <= 56999 ) {
            return topUp(809, x, 56000, 1.52)
        }	
        if ( x <= 57999 ) {
            return topUp(824, x, 57000, 1.52)
        }	
        if ( x <= 58999 ) {
            return topUp(839, x, 58000, 1.52)
        }	
        if ( x <= 59999 ) {
            return topUp(854, x, 59000, 1.52)
        }	
        if ( x <= 60999 ) {
            return topUp(869, x, 60000, 1.52)
        }	
        if ( x <= 61999 ) {
            return topUp(884, x, 61000, 1.52)
        }	
        if ( x <= 62999 ) {
            return topUp(899, x, 62000, 1.52)
        }	
        if ( x <= 63999 ) {
            return topUp(914, x, 63000, 1.52)
        }	
        if ( x <= 64999 ) {
            return topUp(929, x, 64000, 1.52)
        }	
        if ( x <= 65999 ) {
            return topUp(944, x, 65000, 1.52)
        }	
        if ( x <= 66999 ) {
            return topUp(959, x, 66000, 1.52)
        }	
        if ( x <= 67999 ) {
            return topUp(974, x, 67000, 1.52)
        }	
        if ( x <= 68999 ) {
            return topUp(989, x, 68000, 1.50)
        }    
        if ( x <= 69999 ) {
            return topUp(1004, x, 69000, 1.50)
        }	
        if ( x <= 70999 ) {
            return topUp(1019, x, 70000, 1.50)
        }	
        if ( x <= 71999 ) {
            return topUp(1034, x, 71000, 1.50)
        }	
        if ( x <= 72999 ) {
            return topUp(1049, x, 72000, 1.50)
        }	
        if ( x <= 73999 ) {
            return topUp(1064, x, 73000, 1.50)
        }    
        if ( x <= 74999 ) {
            return topUp(1079, x, 74000, 1.50)
        }	
        if ( x <= 75999 ) {
            return topUp(1094, x, 75000, 1.50)
        }	
        if ( x <= 76999 ) {
            return topUp(1109, x, 76000, 1.50)
        }	
        if ( x <= 77999 ) {
            return topUp(1124, x, 77000, 1.50)
        }	
        if ( x <= 78999 ) {
            return topUp(1139, x, 78000, 1.50)
        }	
        if ( x <= 79999 ) {
            return topUp(1154, x, 79000, 1.50)
        }	
        if ( x <= 80999 ) {
            return topUp(1169, x, 80000, 1.50)
        }	
        if ( x <= 81999 ) {
            return topUp(1184, x, 81000, 1.48)
        }	
        if ( x <= 82999 ) {
            return topUp(1199, x, 82000, 1.48)
        }	
        if ( x <= 83999 ) {
            return topUp(1214, x, 83000, 1.48)
        }	
        if ( x <= 84999 ) {
            return topUp(1229, x, 84000, 1.48)
        }	
        if ( x <= 85999 ) {
            return topUp(1244, x, 85000, 1.48)
        }	
        if ( x <= 86999 ) {
            return topUp(1259, x, 86000, 1.48)
        }	
        if ( x <= 87999 ) {
            return topUp(1274, x, 87000, 1.48)
        }	
        if ( x <= 88999 ) {
            return topUp(1289, x, 88000, 1.48)
        }	
        if ( x <= 89999 ) {
            return topUp(1304, x, 89000, 1.48)
        }	
        if ( x <= 90999 ) {
            return topUp(1319, x, 90000, 1.48)
        }	
        if ( x <= 91999 ) {
            return topUp(1334, x, 91000, 1.42)
        }	
        if ( x <= 92999 ) {
            return topUp(1348, x, 92000, 1.34)
        }	
        if ( x <= 93999 ) {
            return topUp(1361, x, 93000, 1.36)
        }	
        if ( x <= 94999 ) {
            return topUp(1375, x, 94000, 1.38)
        }	
        if ( x <= 95999 ) {
            return topUp(1389, x, 95000, 1.40)
        }	
        if ( x <= 96999 ) {
            return topUp(1403, x, 96000, 1.42)
        }	
        if ( x <= 97999 ) {
            return topUp(1417, x, 97000, 1.44)
        }	
        if ( x <= 98999 ) {
            return topUp(1431, x, 98000, 1.34)
        }	
        if ( x <= 99999 ) {
            return topUp(1444, x, 99000, 1.36)
        }	
        if ( x <= 100999 ) {
            return topUp(1458, x, 100000, 1.38)
        }	
        if ( x <= 101999 ) {
            return topUp(1472, x, 101000, 1.40)
        }	
        if ( x <= 102999 ) {
            return topUp(1486, x, 102000, 1.42)
        }	
        if ( x <= 103999 ) {
            return topUp(1500, x, 103000, 1.34)
        }	
        if ( x <= 104999 ) {
            return topUp(1513, x, 104000, 1.36)
        }	
        if ( x <= 105999 ) {
            return topUp(1527, x, 105000, 1.36)
        }	
        if ( x <= 106999 ) {
            return topUp(1541, x, 106000, 1.38)
        }	
        if ( x <= 107999 ) {
            return topUp(1555, x, 107000, 1.40)
        }	
        if ( x <= 108999 ) {
            return topUp(1569, x, 108000, 1.42)
        }	
        if ( x <= 109999 ) {
            return topUp(1583, x, 109000, 1.34)
        }	
        if ( x <= 110999 ) {
            return topUp(1596, x, 110000, 1.36)
        }	
        if ( x <= 111999 ) {
            return topUp(1610, x, 111000, 1.38)
        }	
        if ( x <= 112999 ) {
            return topUp(1624, x, 112000, 1.38)
        }	
        if ( x <= 113999 ) {
            return topUp(1638, x, 113000, 1.40)
        }	
        if ( x <= 114999 ) {
            return topUp(1652, x, 114000, 1.42)
        }	
        if ( x <= 115999 ) {
            return topUp(1666, x, 115000, 1.34)
        }	
        if ( x <= 116999 ) {
            return topUp(1679, x, 116000, 1.36)
        }	
        if ( x <= 117999 ) {
            return topUp(1693, x, 117000, 1.38)
        }	
        if ( x <= 118999 ) {
            return topUp(1707, x, 118000, 1.40)
        }	
        if ( x <= 119999 ) {
            return topUp(1721, x, 119000, 1.42)
        }	
        if ( x <= 120999 ) {
            return topUp(1735, x, 120000, 1.42)
        }	
        if ( x <= 121999 ) {
            return topUp(1749, x, 121000, 1.34)
        }	
        if ( x <= 122999 ) {
            return topUp(1762, x, 122000, 1.36)
        }	
        if ( x <= 123999 ) {
            return topUp(1776, x, 123000, 1.38)
        }	
        if ( x <= 124999 ) {
            return topUp(1790, x, 124000, 1.40)
        }	
        if ( x <= 125999 ) {
            return topUp(1804, x, 125000, 1.32)
        }	
        if ( x <= 126999 ) {
            return topUp(1817, x, 126000, 1.38)
        }	
        if ( x <= 127999 ) {
            return topUp(1831, x, 127000, 1.34)
        }	
        if ( x <= 128999 ) {
            return topUp(1844, x, 128000, 1.30)
        }	
        if ( x <= 129999 ) {
            return topUp(1857, x, 129000, 1.36)
        }	
        if ( x <= 130999 ) {
            return topUp(1871, x, 130000, 1.32)
        }	
        if ( x <= 131999 ) {
            return topUp(1884, x, 131000, 1.38)
        }	
        if ( x <= 132999 ) {
            return topUp(1898, x, 132000, 1.34)
        }	
        if ( x <= 133999 ) {
            return topUp(1911, x, 133000, 1.30)
        }	
        if ( x <= 134999 ) {
            return topUp(1924, x, 134000, 1.36)
        }	
        if ( x <= 135999 ) {
            return topUp(1938, x, 135000, 1.32)
        }	
        if ( x <= 136999 ) {
            return topUp(1951, x, 136000, 1.38)
        }	
        if ( x <= 137999 ) {
            return topUp(1965, x, 137000, 1.34)
        }	
        if ( x <= 138999 ) {
            return topUp(1978, x, 138000, 1.30)
        }	
        if ( x <= 139999 ) {
            return topUp(1991, x, 139000, 1.36)
        }	
        if ( x <= 140999 ) {
            return topUp(2005, x, 140000, 1.32)
        }	
        if ( x <= 141999 ) {
            return topUp(2018, x, 141000, 1.32)
        }	
        if ( x <= 142999 ) {
            return topUp(2031, x, 142000, 1.24)
        }	
        if ( x <= 143999 ) {
            return topUp(2043, x, 143000, 1.28)
        }	
        if ( x <= 144999 ) {
            return topUp(2056, x, 144000, 1.30)
        }	
        if ( x <= 145999 ) {
            return topUp(2069, x, 145000, 1.32)
        }	
        if ( x <= 146999 ) {
            return topUp(2082, x, 146000, 1.24)
        }	
        if ( x <= 147999 ) {
            return topUp(2094, x, 147000, 1.28)
        }	
        if ( x <= 148999 ) {
            return topUp(2107, x, 148000, 1.30)
        }	
        if ( x <= 149999 ) {
            return topUp(2120, x, 149000, 1.32)
        }	
        if ( x >= 150000 ) {
            return topUp(2133, x, 150000, 1.32)
        }
    case 3:
        if ( x <= 12999) {
            return topUp(0, x, 12000, 9.60)
        }
        if ( x <= 13999) {
            return topUp(96, x, 13000, 4.18)
        }
        if ( x <= 14999) {
            return topUp(138, x, 14000, 3.90)
        }
        if ( x <= 15999) {
            return topUp(177, x, 15000, 3.84)
        }
        if ( x <= 16999) {
            return topUp(215, x, 16000, 3.78)
        }
        if ( x <= 17999) {
            return topUp(253, x, 17000, 3.72)
        }
        if ( x <= 18999) {
            return topUp(290, x, 18000, 3.78)
        }
        if ( x <= 19999) {
            return topUp(328, x, 19000, 3.74)
        }
        if ( x <= 20999) {
            return topUp(365, x, 20000, 4.06)
        }
        if ( x <= 21999) {
            return topUp(406, x, 21000, 4.08)
        }
        if ( x <= 22999) {
            return topUp(447, x, 22000, 4.10)
        }
        if ( x <= 23999) {
            return topUp(488, x, 23000, 2.82)
        }
        if ( x <= 24999) {
            return topUp(516, x, 24000, 1.68)
        }
        if ( x <= 25999) {
            return topUp(533, x, 25000, 1.88)
        }
        if ( x <= 26999) {
            return topUp(552, x, 26000, 2.14)
        }
        if ( x <= 27999) {
            return topUp(573, x, 27000, 2.04)
        }
        if ( x <= 28999) {
            return topUp(593, x, 28000, 1.68)
        }
        if ( x <= 29999) {
            return topUp(610, x, 29000, 1.70)
        }
        if ( x <= 30999) {
            return topUp(627, x, 30000, 1.72)
        }
        if ( x <= 31999) {
            return topUp(644, x, 31000, 1.64)
        }
        if ( x <= 32999) {
            return topUp(660, x, 32000, 1.66)
        }
        if ( x <= 33999) {
            return topUp(677, x, 33000, 1.68)
        }
        if ( x <= 34999) {
            return topUp(694, x, 34000, 1.70)
        }
        if ( x <= 35999) {
            return topUp(711, x, 35000, 1.62)
        }
        if ( x <= 36999) {
            return topUp(727, x, 36000, 1.58)
        }
        if ( x <= 37999) {
            return topUp(743, x, 37000, 1.52)
        }
        if ( x <= 38999) {
            return topUp(758, x, 38000, 1.58)
        }
        if ( x <= 39999) {
            return topUp(774, x, 39000, 1.74)
        }
        if ( x <= 40999) {
            return topUp(791, x, 40000, 1.84)
        }
        if ( x <= 41999) {
            return topUp(809, x, 41000, 1.84)
        }
        if ( x <= 42999) {
            return topUp(827, x, 42000, 1.84)
        }
        if ( x <= 43999) {
            return topUp(845, x, 43000, 1.84)
        }
        if ( x <= 44999) {
            return topUp(863, x, 44000, 1.92)
        }
        if ( x <= 45999) {
            return topUp(882, x, 45000, 1.80)
        }
        if ( x <= 46999) {
            return topUp(900, x, 46000, 1.78)
        }
        if ( x <= 47999) {
            return topUp(918, x, 47000, 1.78)
        }
        if ( x <= 48999) {
            return topUp(936, x, 48000, 1.80)
        }
        if ( x <= 49999) {
            return topUp(954, x, 49000, 1.82)
        }
        if ( x <= 50999) {
            return topUp(972, x, 50000, 1.82)
        }
        if ( x <= 51999) {
            return topUp(990, x, 51000, 1.82)
        }
        if ( x <= 52999) {
            return topUp(1008, x, 52000, 1.80)
        }
        if ( x <= 53999) {
            return topUp(1026, x, 53000, 1.88)
        }
        if ( x <= 54999) {
            return topUp(1045, x, 54000, 1.84)
        }
        if ( x <= 55999) {
            return topUp(1063, x, 55000, 1.90)
        }
        if ( x <= 56999) {
            return topUp(1082, x, 56000, 1.98)
        }
        if ( x <= 57999) {
            return topUp(1102, x, 57000, 1.94)
        }
        if ( x <= 58999) {
            return topUp(1121, x, 58000, 1.92)
        }
        if ( x <= 59999) {
            return topUp(1140, x, 59000, 1.88)
        }
        if ( x <= 60999) {
            return topUp(1159, x, 60000, 1.96)
        }
        if ( x <= 61999) {
            return topUp(1179, x, 61000, 1.92)
        }
        if ( x <= 62999) {
            return topUp(1198, x, 62000, 1.90) 
        }
        if ( x <= 63999) {
            return topUp(1217, x, 63000, 1.96)
        }
        if ( x <= 64999) {
            return topUp(1237, x, 64000, 1.94)
        }
        if ( x <= 65999) {
            return topUp(1256, x, 65000, 1.90) 
        }
        if ( x <= 66999) {
            return topUp(1275, x, 66000, 1.98)
        }
        if ( x <= 67999) {
            return topUp(1295, x, 67000, 1.94)
        }
        if ( x <= 68999) {
            return topUp(1314, x, 68000, 1.90) 
        }
        if ( x <= 69999) {
            return topUp(1333, x, 69000, 1.98)
        }
        if ( x <= 70999) {
            return topUp(1353, x, 70000, 1.94)
        }
        if ( x <= 71999) {
            return topUp(1372, x, 71000, 1.92)
        }
        if ( x <= 72999) {
            return topUp(1391, x, 72000, 1.88)
        }
        if ( x <= 73999) {
            return topUp(1410, x, 73000, 1.96)
        }
        if ( x <= 74999) {
            return topUp(1430, x, 74000, 1.92)
        }
        if ( x <= 75999) {
            return topUp(1449, x, 75000, 1.90) 
        }
        if ( x <= 76999) {
            return topUp(1468, x, 76000, 1.96)
        }
        if ( x <= 77999) {
            return topUp(1488, x, 77000, 1.94)
        }
        if ( x <= 78999) {
            return topUp(1507, x, 78000, 1.90) 
        }
        if ( x <= 79999) {
            return topUp(1526, x, 79000, 1.98)
        }
        if ( x <= 80999) {
            return topUp(1546, x, 80000, 1.94)
        }
        if ( x <= 81999) {
            return topUp(1565, x, 81000, 1.92)
        }
        if ( x <= 82999) {
            return topUp(1584, x, 82000, 1.88)
        }
        if ( x <= 83999) {
            return topUp(1603, x, 83000, 1.96)
        }
        if ( x <= 84999) {
            return topUp(1623, x, 84000, 1.92)
        }
        if ( x <= 85999) {
            return topUp(1642, x, 85000, 1.90) 
        }
        if ( x <= 86999) {
            return topUp(1661, x, 86000, 1.96)
        }
        if ( x <= 87999) {
            return topUp(1681, x, 87000, 1.92)
        }
        if ( x <= 88999) {
            return topUp(1700, x, 88000, 1.90) 
        }
        if ( x <= 89999) {
            return topUp(1719, x, 89000, 1.96)
        }
        if ( x <= 90999) {
            return topUp(1739, x, 90000, 1.84)
        }
        if ( x <= 91999) {
            return topUp(1757, x, 91000, 1.78)
        }
        if ( x <= 92999) {
            return topUp(1775, x, 92000, 1.80) 
        }
        if ( x <= 93999) {
            return topUp(1793, x, 93000, 1.82)
        }
        if ( x <= 94999) {
            return topUp(1811, x, 94000, 1.74)
        }
        if ( x <= 95999) {
            return topUp(1828, x, 95000, 1.76)
        }
        if ( x <= 96999) {
            return topUp(1846, x, 96000, 1.78)
        }
        if ( x <= 97999) {
            return topUp(1864, x, 97000, 1.80) 
        }
        if ( x <= 98999) {
            return topUp(1882, x, 98000, 1.74)
        }
        if ( x <= 99999) {
            return topUp(1899, x, 99000, 1.76)
        }
        if ( x <= 100999 ) {
            return topUp(1917, x, 100000, 1.78)
            }
        if ( x <= 101999 ) {
            return topUp(1935, x, 101000, 1.80)
            }
        if ( x <= 102999 ) {
            return topUp(1953, x, 102000, 1.82)
            }
        if ( x <= 103999 ) {
            return topUp(1971, x, 103000, 1.74)
            }
        if ( x <= 104999 ) {
            return topUp(1988, x, 104000, 1.76)
            }
        if ( x <= 105999 ) {
            return topUp(2006, x, 105000, 1.78)
            }
        if ( x <= 106999 ) {
            return topUp(2024, x, 106000, 1.80)
            }
        if ( x <= 107999 ) {
            return topUp(2042, x, 107000, 1.74)
            }
        if ( x <= 108999 ) {
            return topUp(2059, x, 108000, 1.76)
            }
        if ( x <= 109999 ) {
            return topUp(2077, x, 109000, 1.78)
            }
        if ( x <= 110999 ) {
            return topUp(2095, x, 110000, 1.80)
            }
        if ( x <= 111999 ) {
            return topUp(2113, x, 111000, 1.82)
            }
        if ( x <= 112999 ) {
            return topUp(2131, x, 112000, 1.74)
            }
        if ( x <= 113999 ) {
            return topUp(2148, x, 113000, 1.76)
            }
        if ( x <= 114999 ) {
            return topUp(2166, x, 114000, 1.78)
            }
        if ( x <= 115999 ) {
            return topUp(2184, x, 115000, 1.80)
            }
        if ( x <= 116999 ) {
            return topUp(2202, x, 116000, 1.74)
            }
        if ( x <= 117999 ) {
            return topUp(2219, x, 117000, 1.76)
            }
        if ( x <= 118999 ) {
            return topUp(2237, x, 118000, 1.78)
            }
        if ( x <= 119999 ) {
            return topUp(2255, x, 119000, 1.80)
            }
        if ( x <= 120999 ) {
            return topUp(2273, x, 120000, 1.82)
            }
        if ( x <= 121999 ) {
            return topUp(2291, x, 121000, 1.74)
            }
        if ( x <= 122999 ) {
            return topUp(2308, x, 122000, 1.76)
            }
        if ( x <= 123999 ) {
            return topUp(2326, x, 123000, 1.78)
            }
        if ( x <= 124999 ) {
            return topUp(2344, x, 124000, 1.80)
            }
        if ( x <= 125999 ) {
            return topUp(2362, x, 125000, 1.74)
            }
        if ( x <= 126999 ) {
            return topUp(2379, x, 126000, 1.70)
            }
        if ( x <= 127999 ) {
            return topUp(2396, x, 127000, 1.68)
            }
        if ( x <= 128999 ) {
            return topUp(2413, x, 128000, 1.76)
            }
        if ( x <= 129999 ) {
            return topUp(2431, x, 129000, 1.74)
            }
        if ( x <= 130999 ) {
            return topUp(2448, x, 130000, 1.72)
            }
        if ( x <= 131999 ) {
            return topUp(2465, x, 131000, 1.70)
            }
        if ( x <= 132999 ) {
            return topUp(2482, x, 132000, 1.68)
            }
        if ( x <= 133999 ) {
            return topUp(2499, x, 133000, 1.76)
            }
        if ( x <= 134999 ) {
            return topUp(2517, x, 134000, 1.74)
            }
        if ( x <= 135999 ) {
            return topUp(2534, x, 135000, 1.70)
            }
        if ( x <= 136999 ) {
            return topUp(2551, x, 136000, 1.68)
            }
        if ( x <= 137999 ) {
            return topUp(2568, x, 137000, 1.76)
            }
        if ( x <= 138999 ) {
            return topUp(2586, x, 138000, 1.74)
            }
        if ( x <= 139999 ) {
            return topUp(2603, x, 139000, 1.72)
            }
        if ( x <= 140999 ) {
            return topUp(2620, x, 140000, 1.70)
            }
        if ( x <= 141999 ) {
            return topUp(2637, x, 141000, 1.62)
            }
        if ( x <= 142999 ) {
            return topUp(2653, x, 142000, 1.68)
            }
        if ( x <= 143999 ) {
            return topUp(2670, x, 143000, 1.64)
            }
        if ( x <= 144999 ) {
            return topUp(2686, x, 144000, 1.60)
            }
        if ( x <= 145999 ) {
            return topUp(2702, x, 145000, 1.66)
            }
        if ( x <= 146999 ) {
            return topUp(2719, x, 146000, 1.64)
            }
        if ( x <= 147999 ) {
            return topUp(2735, x, 147000, 1.60)
            }
        if ( x <= 148999 ) {
            return topUp(2751, x, 148000, 1.66)
            }
        if ( x <= 149999 ) {
            return topUp(2768, x, 149000, 1.62)
            }
        if ( x >= 150000 ) {
            return topUp(2784, x, 150000, 1.62)
        }
    case 4:
        if ( x<= 12999 ) {
            return topUp(000, x, 12000, 10.3)
        }
        if ( x<= 13999 ) {
            return topUp(103, x, 13000, 4.48)
        }
        if ( x<= 14999 ) {
            return topUp(148, x, 14000, 4.12)
        }
        if ( x<= 15999 ) {
            return topUp(189, x, 15000, 4.18)
        }
        if ( x<= 16999 ) {
            return topUp(231, x, 16000, 4.04)
        }
        if ( x<= 17999 ) {
            return topUp(271, x, 17000, 4.02)
        }
        if ( x<= 18999 ) {
            return topUp(311, x, 18000, 4.02)
        }
        if ( x<= 19999 ) {
            return topUp(351, x, 19000, 4.10)
        }
        if ( x<= 20999 ) {
            return topUp(392, x, 20000, 4.34)
        }
        if ( x<= 21999 ) {
            return topUp(435, x, 21000, 4.38)
        }
        if ( x<= 22999 ) {
            return topUp(479, x, 22000, 4.42)
        }
        if ( x<= 23999 ) {
            return topUp(523, x, 23000, 4.34)
        }
        if ( x<= 24999 ) {
            return topUp(566, x, 24000, 4.38)
        }
        if ( x<= 25999 ) {
            return topUp(610, x, 25000, 4.40)
        }
        if ( x<= 26999 ) {
            return topUp(654, x, 26000, 4.24)
        }
        if ( x<= 27999 ) {
            return topUp(696, x, 27000, 2.40)
        }
        if ( x<= 28999 ) {
            return topUp(720, x, 28000, 2.10)
        }
        if ( x<= 29999 ) {
            return topUp(741, x, 29000, 2.04)
        }
        if ( x<= 30999 ) {
            return topUp(761, x, 30000, 2.08)
        }
        if ( x<= 31999 ) {
            return topUp(782, x, 31000, 2.04)
        }
        if ( x<= 32999 ) {
            return topUp(802, x, 32000, 2.08)
        }
        if ( x<= 33999 ) {
            return topUp(823, x, 33000, 2.02)
        }
        if ( x<= 34999 ) {
            return topUp(843, x, 34000, 2.06)
        }
        if ( x<= 35999 ) {
            return topUp(864, x, 35000, 2.00)
        }
        if ( x<= 36999 ) {
            return topUp(884, x, 36000, 1.88)
        }
        if ( x<= 37999 ) {
            return topUp(903, x, 37000, 1.90)
        }
        if ( x<= 38999 ) {
            return topUp(922, x, 38000, 1.90)
           }
        if ( x<= 39999 ) {
            return topUp(941, x, 39000, 2.00)
        }
        if ( x<= 40999 ) {
            return topUp(961, x, 40000, 2.18)
        }
        if ( x<= 41999 ) {
            return topUp(983, x, 41000, 2.14)
        }
        if ( x <= 42999 ) {
            return topUp(1004, x, 42000, 2.12)
        }
        if ( x <= 43999 ) {
            return topUp(1025, x, 43000, 2.18)
        }
        if ( x <= 44999 ) {
            return topUp(1047, x, 44000, 2.24)
        }
        if ( x <= 45999 ) {
            return topUp(1069, x, 45000, 2.18)
        }
        if ( x <= 46999 ) {
            return topUp(1091, x, 46000, 2.10)
        }
        if ( x <= 47999 ) {
            return topUp(1112, x, 47000, 2.10)
        }
        if ( x <= 48999 ) {
            return topUp(1133, x, 48000, 2.08)
        }
        if ( x <= 49999 ) {
            return topUp(1154, x, 49000, 2.06)
        }
        if ( x <= 50999 ) {
            return topUp(1175, x, 50000, 2.16)
        }
        if ( x <= 51999 ) {
            return topUp(1197, x, 51000, 2.14)
        }
        if ( x <= 52999 ) {
            return topUp(1218, x, 52000, 2.18)
        }
        if ( x <= 53999 ) {
            return topUp(1240, x, 53000, 2.12)
        }
        if ( x <= 54999 ) {
            return topUp(1261, x, 54000, 2.16)
        }
        if ( x <= 55999 ) {
            return topUp(1283, x, 55000, 2.28)
        }
        if ( x <= 56999 ) {
            return topUp(1306, x, 56000, 2.30)
        }
        if ( x <= 57999 ) {
            return topUp(1329, x, 57000, 2.32)
        }
        if ( x <= 58999 ) {
            return topUp(1352, x, 58000, 2.24)
        }
        if ( x <= 59999 ) {
            return topUp(1374, x, 59000, 2.26)
        }
        if ( x <= 60999 ) {
            return topUp(1397, x, 60000, 2.28)
        }
        if ( x <= 61999 ) {
            return topUp(1420, x, 61000, 2.30)
        }
        if ( x <= 62999 ) {
            return topUp(1443, x, 62000, 2.30)
        }
        if ( x <= 63999 ) {
            return topUp(1466, x, 63000, 2.32)
        }
        if ( x <= 64999 ) {
            return topUp(1489, x, 64000, 2.24)
        }
        if ( x <= 65999 ) {
            return topUp(1511, x, 65000, 2.26)
        }
        if ( x <= 66999 ) {
            return topUp(1534, x, 66000, 2.28)
        }
        if ( x <= 67999 ) {
            return topUp(1557, x, 67000, 2.30)
        }
        if ( x <= 68999 ) {
            return topUp(1580, x, 68000, 2.32)
        }
        if ( x <= 69999 ) {
            return topUp(1603, x, 69000, 2.24)
        }
        if ( x <= 70999 ) {
            return topUp(1625, x, 70000, 2.26)
        }
        if ( x <= 71999 ) {
            return topUp(1648, x, 71000, 2.28)
        }
        if ( x <= 72999 ) {
            return topUp(1671, x, 72000, 2.30)
        }
        if ( x <= 73999 ) {
            return topUp(1694, x, 73000, 2.32)
        }
        if ( x <= 74999 ) {
            return topUp(1717, x, 74000, 2.32)
        }
        if ( x <= 75999 ) {
            return topUp(1740, x, 75000, 2.24)
        }
        if ( x <= 76999 ) {
            return topUp(1762, x, 76000, 2.26)
        }
        if ( x <= 77999 ) {
            return topUp(1785, x, 77000, 2.28)
        }
        if ( x <= 78999 ) {
            return topUp(1808, x, 78000, 2.30)
        }
        if ( x <= 79999 ) {
            return topUp(1831, x, 79000, 2.32)
        }
        if ( x <= 80999 ) {
            return topUp(1854, x, 80000, 2.24)
        }
        if ( x <= 81999 ) {
            return topUp(1876, x, 81000, 2.26)
        }
        if ( x <= 82999 ) {
            return topUp(1899, x, 82000, 2.28)
        }
        if ( x <= 83999 ) {
            return topUp(1922, x, 83000, 2.30)
        }
        if ( x <= 84999 ) {
            return topUp(1945, x, 84000, 2.32)
        }
        if ( x <= 85999 ) {
            return topUp(1968, x, 85000, 2.24)
        }
        if ( x <= 86999 ) {
            return topUp(1990, x, 86000, 2.26)
        }
        if ( x <= 87999 ) {
            return topUp(2013, x, 87000, 2.26)
        }
        if ( x <= 88999 ) {
            return topUp(2036, x, 88000, 2.28)
        }
        if ( x <= 89999 ) {
            return topUp(2059, x, 89000, 2.30)
        }
        if ( x <= 90999 ) {
            return topUp(2082, x, 90000, 2.22)
        }
        if ( x <= 91999 ) {
            return topUp(2104, x, 91000, 2.12)
        }
        if ( x <= 92999 ) {
            return topUp(2125, x, 92000, 2.12)
        }
        if ( x <= 93999 ) {
            return topUp(2146, x, 93000, 2.12)
        }
        if ( x <= 94999 ) {
            return topUp(2167, x, 94000, 2.12)
        }
        if ( x <= 95999 ) {
            return topUp(2188, x, 95000, 2.12)
        }
        if ( x <= 96999 ) {
            return topUp(2209, x, 96000, 2.12)
        }
        if ( x <= 97999 ) {
            return topUp(2230, x, 97000, 2.12)
        }
        if ( x <= 98999 ) {
            return topUp(2251, x, 98000, 2.12)
        }
        if ( x <= 99999 ) {
            return topUp(2272, x, 99000, 2.12)
        }
        if ( x <= 100999 ) {
            return topUp(2293, x, 100000, 2.12)
        }
        if ( x <= 101999 ) {
            return topUp(2314, x, 101000, 2.12)
        }
        if ( x <= 102999 ) {
            return topUp(2335, x, 102000, 2.12)
        }
        if ( x <= 103999 ) {
            return topUp(2356, x, 103000, 2.12)
        }
        if ( x <= 104999 ) {
            return topUp(2377, x, 104000, 2.12)
        }
        if ( x <= 105999 ) {
            return topUp(2398, x, 105000, 2.10)
        }
        if ( x <= 106999 ) {
            return topUp(2419, x, 106000, 2.10)
        }
        if ( x <= 107999 ) {
            return topUp(2440, x, 107000, 2.10)
        }
        if ( x <= 108999 ) {
            return topUp(2461, x, 108000, 2.10)
        }
        if ( x <= 109999 ) {
            return topUp(2482, x, 109000, 2.10)
        }
        if ( x <= 110999 ) {
            return topUp(2503, x, 110000, 2.10)
        }
        if ( x <= 111999 ) {
            return topUp(2524, x, 111000, 2.10)
        }
        if ( x <= 112999 ) {
            return topUp(2545, x, 112000, 2.10)
        }
        if ( x <= 113999 ) {
            return topUp(2566, x, 113000, 2.10)
        }
        if ( x <= 114999 ) {
            return topUp(2587, x, 114000, 2.10)
        }
        if ( x <= 115999 ) {
            return topUp(2608, x, 115000, 2.10)
        }
        if ( x <= 116999 ) {
            return topUp(2629, x, 116000, 2.10)
        }
        if ( x <= 117999 ) {
            return topUp(2650, x, 117000, 2.10)
        }
        if ( x <= 118999 ) {
            return topUp(2671, x, 118000, 2.10)
        }
        if ( x <= 119999 ) {
            return topUp(2692, x, 119000, 2.10)
        }
        if ( x <= 120999 ) {
            return topUp(2713, x, 120000, 2.10)
        }
        if ( x <= 121999 ) {
            return topUp(2734, x, 121000, 2.10)
        }
        if ( x <= 122999 ) {
            return topUp(2755, x, 122000, 2.10)
        }
        if ( x <= 123999 ) {
            return topUp(2776, x, 123000, 2.10)
        }
        if ( x <= 124999 ) {
            return topUp(2797, x, 124000, 2.08)
        }
        if ( x <= 125999 ) {
            return topUp(2818, x, 125000, 1.98)
        }
        if ( x <= 126999 ) {
            return topUp(2838, x, 126000, 2.06)
        }
        if ( x <= 127999 ) {
            return topUp(2859, x, 127000, 2.02)
        }
        if ( x <= 128999 ) {
            return topUp(2879, x, 128000, 2.08)
        }
        if ( x <= 129999 ) {
            return topUp(2900, x, 129000, 2.04)
        }
        if ( x <= 130999 ) {
            return topUp(2920, x, 130000, 2.02)
        }
        if ( x <= 131999 ) {
            return topUp(2940, x, 131000, 2.08)
        }
        if ( x <= 132999 ) {
            return topUp(2961, x, 132000, 2.04)
        }
        if ( x <= 133999 ) {
            return topUp(2981, x, 133000, 2.00)
        }
        if ( x <= 134999 ) {
            return topUp(3001, x, 134000, 2.08)
        }
        if ( x <= 135999 ) {
            return topUp(3022, x, 135000, 2.04)
        }
        if ( x <= 136999 ) {
            return topUp(3042, x, 136000, 2.00)
        }
        if ( x <= 137999 ) {
            return topUp(3062, x, 137000, 2.06)
        }
        if ( x <= 138999 ) {
            return topUp(3083, x, 138000, 2.02)
        }
        if ( x <= 139999 ) {
            return topUp(3103, x, 139000, 2.00)
        }
        if ( x <= 140999 ) {
            return topUp(3123, x, 140000, 1.96)
        }
        if ( x <= 141999 ) {
            return topUp(3143, x, 141000, 1.98)
        }
        if ( x <= 142999 ) {
            return topUp(3163, x, 142000, 1.94)
        }
        if ( x <= 143999 ) {
            return topUp(3182, x, 143000, 1.90)
        }
        if ( x <= 144999 ) {
            return topUp(3201, x, 144000, 1.98)
        }
        if ( x <= 145999 ) {
            return topUp(3221, x, 145000, 1.94)
        }
        if ( x <= 146999 ) {
            return topUp(3240, x, 146000, 1.90)
        }
        if ( x <= 147999 ) {
            return topUp(3259, x, 147000, 1.96)
        }
        if ( x <= 148999 ) {
            return topUp(3279, x, 148000, 1.92)
        }
        if ( x <= 149999 ) {
            return topUp(3298, x, 149000, 1.88)
        }
        if ( x >= 150000 ) {
            return topUp(3317, x, 150000, 1.88)
        }
    }
}

const dadSection7 = (dadIncome, momIncome) => dadIncome / (dadIncome + momIncome); // determine Dad's proportionate contribution to section 7 expenses
const momSection7 = (dadIncome, momIncome) => momIncome / (dadIncome + momIncome); // determine Mom's proportionate contribution to section 7 expenses

console.log(`Dad's Guideline income is ${dadIncome.toLocaleString('en-CA', {style: 'currency', currency: 'CAD'})}.`); // print Dad's income
console.log(`Mom's Guideline income is ${momIncome.toLocaleString('en-CA', {style: 'currency', currency: 'CAD'})}.`); // print Mom's income
console.log(`There are ${numKids} kids.`); // print number of kids
console.log(`Dad's section 3 table amount: ${childSupport(dadIncome, numKids).toLocaleString('en-CA', { style: 'currency', currency: 'CAD'})}.`); // print Dad's support
console.log(`Dad's section 7 proportion: ${dadSection7(dadIncome, momIncome).toLocaleString('en-CA', {style: 'percent'})}.`); // print Dad's section 7 proportion
console.log(`Mom's section 3 table amount: ${childSupport(momIncome, numKids).toLocaleString('en-CA', { style: 'currency', currency: 'CAD'})}.`); // print Mom's support
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

setOff(dadIncome, momIncome, numKids); // function call will print the offset support amount

childSupportTest = (income, kids, expected) => { // test whether inputs return expected results
    if (childSupport(income, kids) != expected) {
        console.log("no worky")
        return
    }
    console.log("she good")
}