/*
 NOTE со страницы: http://the-tale.org/guide/artifacts/
$('table').eq(1)
	.find('tbody tr')
	.filter((i, tr) => $(tr).children().eq(3).text().trim() !== 'хлам')
	.map((i, tr) => ({
		name: $(tr).children().eq(1).text().trim(),
		id: +$(tr).children().eq(1).find('a').attr('href').replace('/guide/artifacts/', ''),
		level: +$(tr).children().eq(0).text().trim(),
	}))
	.get()
	.sort((a, b) => a.id - b.id);
 */

export default [
	{name: 'портки', id: 1, level: 1},
	{name: 'лапти', id: 2, level: 1},
	{name: 'роба', id: 3, level: 1},
	{name: 'рукавицы', id: 4, level: 1},
	{name: 'дубинка', id: 5, level: 1},
	{name: 'букавачьи рога', id: 6, level: 1},
	{name: 'волшебные штаны', id: 7, level: 2},
	{name: 'астральное жало', id: 8, level: 4},
	{name: 'живой корень', id: 9, level: 5},
	{name: 'нуково копыто', id: 10, level: 7},
	{name: 'дубина', id: 11, level: 8},
	{name: 'волчьи клыки', id: 12, level: 10},
	{name: 'сердце леса', id: 13, level: 11},
	{name: 'плачущий стилет', id: 14, level: 13},
	{name: 'короткое копьё', id: 15, level: 14},
	{name: 'медвежья лапа', id: 16, level: 15},
	{name: 'тонкие перчатки', id: 17, level: 17},
	{name: 'налобный рог', id: 18, level: 18},
	{name: 'призрачные наплечники', id: 19, level: 19},
	{name: 'магическая броня', id: 20, level: 21},
	{name: 'клык головонога', id: 21, level: 1},
	{name: 'поползневый тегиляй', id: 22, level: 1},
	{name: 'звёздный венок', id: 23, level: 3},
	{name: 'склизкие сапоги', id: 24, level: 4},
	{name: 'высокие сапоги', id: 25, level: 6},
	{name: 'пасть росянки', id: 26, level: 7},
	{name: 'химический доспех', id: 27, level: 9},
	{name: 'мозговой слизень', id: 28, level: 10},
	{name: 'кожаные штаны', id: 29, level: 12},
	{name: 'крават', id: 30, level: 13},
	{name: 'пропитанный химией плащ', id: 31, level: 15},
	{name: 'рваные перчатки', id: 32, level: 16},
	{name: 'рваньё', id: 33, level: 17},
	{name: 'глиняные штаны', id: 34, level: 19},
	{name: 'плотный халат', id: 35, level: 20},
	{name: 'узкие штаны', id: 36, level: 21},
	{name: 'сверкающий плащ', id: 37, level: 21},
	{name: 'посох', id: 38, level: 1},
	{name: 'железа кадука', id: 39, level: 2},
	{name: 'меч справедливости', id: 40, level: 4},
	{name: 'кобеняк', id: 41, level: 5},
	{name: 'лабораторные перчатки', id: 42, level: 7},
	{name: 'джокер', id: 43, level: 8},
	{name: 'лапа богомола', id: 44, level: 10},
	{name: 'отравленный кинжал', id: 45, level: 11},
	{name: 'одержалка', id: 46, level: 13},
	{name: 'шипованный хвост', id: 47, level: 14},
	{name: 'рунный топор', id: 48, level: 15},
	{name: 'молот атеистов', id: 49, level: 17},
	{name: 'стальные кихоте', id: 50, level: 18},
	{name: 'убивалка', id: 51, level: 19},
	{name: 'разумный обруч', id: 52, level: 21},
	{name: 'шкура шакала', id: 53, level: 1},
	{name: 'жало скорпиона', id: 54, level: 1},
	{name: 'добротные штаны', id: 55, level: 3},
	{name: 'пламенный воротник', id: 56, level: 4},
	{name: 'меч-бастард', id: 57, level: 6},
	{name: 'высушенный усик', id: 58, level: 7},
	{name: 'погремушка', id: 59, level: 9},
	{name: 'огненный плащ', id: 60, level: 10},
	{name: 'доспех из чешуек дракона', id: 61, level: 12},
	{name: 'волшебная лампа', id: 62, level: 13},
	{name: 'концентрированная ярость', id: 63, level: 15},
	{name: 'ветреные сапоги', id: 64, level: 16},
	{name: 'волшебный посох', id: 65, level: 17},
	{name: 'пергамент', id: 66, level: 19},
	{name: 'корона', id: 67, level: 1},
	{name: 'дряхлый доспех', id: 68, level: 1},
	{name: 'цепи', id: 69, level: 7},
	{name: 'цервельер', id: 70, level: 15},
	{name: 'разбитый щит', id: 138, level: 1},
	{name: 'старое кольцо', id: 139, level: 1},
	{name: 'мех подыльника', id: 140, level: 3},
	{name: 'гербовый щит', id: 142, level: 24},
	{name: 'перчатки из кожи наги', id: 144, level: 18},
	{name: 'боевая плеть', id: 146, level: 24},
	{name: 'катар', id: 149, level: 25},
	{name: 'каменный нож', id: 150, level: 1},
	{name: 'кусочек янтаря', id: 152, level: 1},
	{name: 'лопатки додо', id: 155, level: 1},
	{name: 'перепончатые крылья', id: 157, level: 1},
	{name: 'бхулава', id: 158, level: 1},
	{name: 'маска гвиллиона', id: 161, level: 1},
	{name: 'ухо вилаха', id: 162, level: 1},
	{name: 'туманные наплечники', id: 164, level: 1},
	{name: 'боевой цеп', id: 167, level: 1},
	{name: 'колечко с камушком', id: 168, level: 1},
	{name: 'песчаное кольцо', id: 170, level: 3},
	{name: 'угольное кольцо', id: 172, level: 3},
	{name: 'медное кольцо', id: 174, level: 1},
	{name: 'печатка жихаря', id: 176, level: 2},
	{name: 'могильный перстень', id: 178, level: 10},
	{name: 'солидное кольцо', id: 180, level: 19},
	{name: 'чистый щит', id: 182, level: 43},
	{name: 'фамильный перстень', id: 184, level: 21},
	{name: 'кольцо зверя', id: 186, level: 24},
	{name: 'плащ зверя', id: 188, level: 41},
	{name: 'горячее кольцо', id: 190, level: 28},
	{name: 'хрустальный коготь', id: 192, level: 43},
	{name: 'чёрный волос', id: 194, level: 22},
	{name: 'кольцо первородного', id: 196, level: 42},
	{name: 'паучий щит', id: 199, level: 42},
	{name: 'доспех из дэры', id: 201, level: 23},
	{name: 'гринделевые ботинки', id: 203, level: 22},
	{name: 'гримовый хопеш', id: 204, level: 40},
	{name: 'кагирские перчатки', id: 206, level: 37},
	{name: 'друджийская сабля', id: 208, level: 30},
	{name: 'дасийские наплечники', id: 210, level: 36},
	{name: 'слёзы ичетика', id: 212, level: 28},
	{name: 'теневой плащ', id: 215, level: 24},
	{name: 'кудово кольцо', id: 217, level: 37},
	{name: 'топор ларвы', id: 218, level: 29},
	{name: 'белая туника', id: 220, level: 27},
	{name: 'скалистая накидка', id: 222, level: 38},
	{name: 'мясорез', id: 224, level: 35},
	{name: 'голова ламашту', id: 226, level: 40},
	{name: 'лахамовый плащ', id: 228, level: 26},
	{name: 'лунное лезвие', id: 231, level: 22},
	{name: 'поцелуй смерти', id: 232, level: 32},
	{name: 'краденные сапоги', id: 234, level: 26},
	{name: 'седые чикчиры', id: 236, level: 27},
	{name: 'плетёнки', id: 239, level: 32},
	{name: 'зубастая кожа', id: 240, level: 30},
	{name: 'холодные наручи', id: 242, level: 31},
	{name: 'червивы', id: 244, level: 39},
	{name: 'тёплые сандалии', id: 247, level: 36},
	{name: 'шнурок-лекарь', id: 249, level: 38},
	{name: 'холерные наплечники', id: 250, level: 39},
	{name: 'буро-зелёные штаны', id: 252, level: 31},
	{name: 'крылья гиены', id: 254, level: 44},
	{name: 'мраморный мантлет', id: 256, level: 33},
	{name: 'язвенный гиматий', id: 258, level: 41},
	{name: 'цветик', id: 260, level: 33},
	{name: 'жирник', id: 263, level: 35},
	{name: 'бульгово зеркало', id: 265, level: 41},
	{name: 'белокостник', id: 267, level: 34},
	{name: 'базальтовый шар', id: 268, level: 26},
	{name: 'виринки', id: 271, level: 9},
	{name: 'тигриная шкура', id: 272, level: 9},
	{name: 'пятки барбегаза', id: 275, level: 12},
	{name: 'болотная искра', id: 277, level: 2},
	{name: 'диадема зрячего', id: 278, level: 23},
	{name: 'лягушачья кожа', id: 281, level: 24},
	{name: 'луговые наплечники', id: 282, level: 9},
	{name: 'роуч', id: 284, level: 18},
	{name: 'братец-топор', id: 287, level: 28},
	{name: 'золочёная шпага', id: 288, level: 45},
	{name: 'морозная пика', id: 290, level: 41},
	{name: 'тараканий щит', id: 292, level: 12},
	{name: 'гюрзовые ботинки', id: 294, level: 8},
	{name: 'костяной щит', id: 296, level: 15},
	{name: 'снежные наплечники', id: 299, level: 30},
	{name: 'лёгкий коготь', id: 300, level: 2},
	{name: 'горная мантия', id: 303, level: 13},
	{name: 'красный капюшон', id: 304, level: 33},
	{name: 'белая кираса', id: 306, level: 43},
	{name: 'костяной нож', id: 308, level: 1},
	{name: 'мясник', id: 310, level: 44},
	{name: 'ониксовый марион', id: 313, level: 38},
	{name: 'радужная кольчуга', id: 314, level: 38},
	{name: 'крылатое манто', id: 315, level: 11},
	{name: 'гомункуловые перчатки', id: 317, level: 10},
	{name: 'печатка праха', id: 319, level: 46},
	{name: 'амулет смерти', id: 320, level: 46},
	{name: 'тагарин', id: 322, level: 52},
	{name: 'кольцо очарования', id: 324, level: 50},
	{name: 'пушистая шкура', id: 327, level: 48},
	{name: 'лесной оберег', id: 328, level: 50},
	{name: 'глаза мёртвого', id: 330, level: 56},
	{name: 'болотный оберег', id: 333, level: 55},
	{name: 'чёрный плащ', id: 335, level: 45},
	{name: 'шрам атача', id: 336, level: 51},
	{name: 'кисы', id: 338, level: 50},
	{name: 'светящийся глаз', id: 345, level: 61},
	{name: 'шотоковая капелина', id: 347, level: 58},
	{name: 'хрустальная шкура', id: 349, level: 56},
	{name: 'шипованная плеть', id: 351, level: 48},
	{name: 'сапоги мертвеца', id: 354, level: 65},
	{name: 'изгилии', id: 356, level: 61},
	{name: 'кеньги', id: 357, level: 47},
	{name: 'железные копыта', id: 359, level: 53},
	{name: 'каменные чётки', id: 361, level: 54},
	{name: 'костяной цеп', id: 363, level: 60},
	{name: 'чешуйчатые руки', id: 366, level: 45},
	{name: 'сверкающий хлыст', id: 367, level: 40},
	{name: 'заговорённый балахон', id: 370, level: 35},
	{name: 'зоркий камень', id: 372, level: 33},
	{name: 'баклеранер', id: 373, level: 25},
	{name: 'сон-оберег', id: 376, level: 20},
	{name: 'чёрный пернач', id: 379, level: 57},
	{name: 'костяной посох', id: 381, level: 57},
	{name: 'полэкс', id: 382, level: 25},
	{name: 'шамшир', id: 384, level: 25},
	{name: 'буздыган', id: 386, level: 25},
	{name: 'пельта', id: 388, level: 2},
	{name: 'адагра', id: 390, level: 3},
	{name: 'полдроны', id: 392, level: 13},
	{name: 'сполдеры', id: 394, level: 12},
	{name: 'айлетты', id: 396, level: 11},
	{name: 'расшитые пулены', id: 398, level: 5},
	{name: 'хитиновое копьё', id: 400, level: 42}
];
