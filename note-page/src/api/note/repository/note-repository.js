/**
 * 최상위 폴더에 위치한 가상의 노트 반환
 * @param {string} _userId
 * @returns {Note[]}
 */
export async function getTestNote(_userId) {
	return [{
		noteId   : 'MANUAL',
		folder   : 'ROOT',
		title    : '공지사항 테스트',
		hashtags : '["공지사항", "테스트"]',
		isLocked : true,
		createdBy: 'SYSTEM',
		createdAt: new Date('2026-11-17 17:58:39'),
		updatedBy: 'SYSTEM',
		updatedAt: new Date('2026-11-17 17:58:39'),
	}];
}

/**
 * samples.md 내용 반환
 * @param noteId {string}
 * @returns {Promise<NoteDetail>}
 * @see samples.md
 */
export async function getTestNoteData(noteId) {
	return {
		noteId,
		title    : '공지사항 테스트',
		hashtags : JSON.parse('["공지사항", "테스트"]'),
		createdBy: 'SYSTEM',
		createdAt: new Date('2026-11-17 17:58:39'),
		updatedBy: 'SYSTEM',
		updatedAt: new Date('2026-11-17 17:58:39'),
		blocks   : [{
			blockId  : 'BLOCK_0001',
			parentId : null,
			noteId,
			blockType: 'h1',
			position : 1,
			content  : '# 개요'
		}, {
			blockId  : 'BLOCK_0002',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0003',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '이 문서는 note-page 입장 시 보여지는 **대문 페이지**와 같은 기능을 함.'
		}, {
			blockId  : 'BLOCK_0004',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0005',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '이 문서에 작성할 내용은 기본 문법들임.'
		}, {
			blockId  : 'BLOCK_0006',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0007',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '문법에 변동이 있을 경우 공지사항 폴더를 만들어 changelog 노트를 작성하겠음.'
		}, {
			blockId  : 'BLOCK_0008',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0009',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '목차의 경우 FAB로 만들 예정이니 작성하지 않겠음.'
		}, {
			blockId  : 'BLOCK_0010',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0011',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '노트 페이지는 마크다운 언어를 기반으로 한, **notion**, **obsidian**의 문법을 차용함.'
		}, {
			blockId  : 'BLOCK_0012',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0013',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '단, 기존의 마크다운, **notion**, **obsidian**의 문법과 다른 부분이 상당히 많으므로 아래 내용을 읽기를 바람.'
		}, {
			blockId  : 'BLOCK_0014',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0015',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '각 컴포넌트들의 스타일은 계정별로 수정 가능하며, **CSS**를 통해 스타일을 수정할 수 있음.'
		}, {
			blockId  : 'BLOCK_0016',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0017',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '각 컴포넌트는 `short_cut`과 `command_en`, `command_kr`이 있으며, `/command`로 작성할 수 있음.'
		}, {
			blockId  : 'BLOCK_0018',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0019',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '`command`의 경우 자동완성 기능이 적용된 팝업에서 방향키와 엔터, 탭, 스페이스바를 통해 선택할 수 있음.'
		}, {
			blockId  : 'BLOCK_0020',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0021',
			parentId : null,
			noteId,
			blockType: 'h2',
			position : 1,
			content  : '## 레이아웃'
		}, {
			blockId  : 'BLOCK_0022',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0023',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '노트의 영역은 아래와 같음.'
		}, {
			blockId  : 'BLOCK_0024',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0025',
			parentId : null,
			noteId,
			blockType: 'code',
			position : 1,
			content  : '```text'
		}, {
			blockId  : 'BLOCK_0026',
			parentId : 'BLOCK_0025',
			noteId,
			blockType: 'code',
			position : 1,
			content  : '==================================='
		}, {
			blockId  : 'BLOCK_0027',
			parentId : 'BLOCK_0025',
			noteId,
			blockType: 'code',
			position : 1,
			content  : '             제목 영역'
		}, {
			blockId  : 'BLOCK_0028',
			parentId : 'BLOCK_0025',
			noteId,
			blockType: 'code',
			position : 1,
			content  : '==================================='
		}, {
			blockId  : 'BLOCK_0029',
			parentId : 'BLOCK_0025',
			noteId,
			blockType: 'code',
			position : 1,
			content  : '           메타데이터 영역'
		}, {
			blockId  : 'BLOCK_0030',
			parentId : 'BLOCK_0025',
			noteId,
			blockType: 'code',
			position : 1,
			content  : '==================================='
		}, {
			blockId  : 'BLOCK_0031',
			parentId : 'BLOCK_0025',
			noteId,
			blockType: 'code',
			position : 1,
			content  : '             목차 영역'
		}, {
			blockId  : 'BLOCK_0032',
			parentId : 'BLOCK_0025',
			noteId,
			blockType: 'code',
			position : 1,
			content  : '==================================='
		}, {
			blockId  : 'BLOCK_0033',
			parentId : 'BLOCK_0025',
			noteId,
			blockType: 'code',
			position : 1,
			content  : '           노트 블럭 영역'
		}, {
			blockId  : 'BLOCK_0034',
			parentId : 'BLOCK_0025',
			noteId,
			blockType: 'code',
			position : 1,
			content  : '==================================='
		}, {
			blockId  : 'BLOCK_0035',
			parentId : null,
			noteId,
			blockType: 'code',
			position : 1,
			content  : '```'
		}, {
			blockId  : 'BLOCK_0036',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0037',
			parentId : null,
			noteId,
			blockType: 'h2',
			position : 1,
			content  : '## 블럭'
		}, {
			blockId  : 'BLOCK_0038',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0039',
			parentId : null,
			noteId,
			blockType: 'h3',
			position : 1,
			content  : '### 일반 텍스트'
		}, {
			blockId  : 'BLOCK_0040',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0041',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '아무 행동없이 일반적인 텍스트만 작성.'
		}, {
			blockId  : 'BLOCK_0042',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0043',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '기존의 마크다운 언어는 다음 줄에 작성하고 싶을 때 한 줄 띄어야 했으나, 본 노트에서는 **줄바꿈**을 통해 다음 줄로 넘어갈 수 있음.'
		}, {
			blockId  : 'BLOCK_0044',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0045',
			parentId : null,
			noteId,
			blockType: 'h3',
			position : 1,
			content  : '### 제목'
		}, {
			blockId  : 'BLOCK_0046',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0047',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '**기존의 마크다운 언어와 동일**'
		}, {
			blockId  : 'BLOCK_0048',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0049',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- `# 제목1`: `/h1`이나 `/제목1`로 작성 가능'
		}, {
			blockId  : 'BLOCK_0050',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- 마찬가지로 `# 제목4`의 경우 `#### 제목4`, `/h4`, `/제목4`로 작성 가능'
		}, {
			blockId  : 'BLOCK_0051',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- `제목1` ~ `제목6`까지 존재'
		}, {
			blockId  : 'BLOCK_0052',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- GitHub과 마찬가지로 제목 아래에 가로선 배치.'
		}, {
			blockId  : 'BLOCK_0053',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- Obsidian과 같이 같은 수준의 제목이 나오기 전까지의 영역을 접을 수 있음.'
		}, {
			blockId  : 'BLOCK_0054',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0055',
			parentId : null,
			noteId,
			blockType: 'h3',
			position : 1,
			content  : '### List'
		}, {
			blockId  : 'BLOCK_0056',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0057',
			parentId : null,
			noteId,
			blockType: 'h4',
			position : 1,
			content  : '#### Ordered-List'
		}, {
			blockId  : 'BLOCK_0058',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0059',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '**기존의 마크다운 언어와 동일**'
		}, {
			blockId  : 'BLOCK_0060',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0061',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- `1.`, `2.`와 같이 숫자와 마침표를 기준으로 시작. (/\d+\./g)'
		}, {
			blockId  : 'BLOCK_0062',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- `/ordered-list`로 작성할 수도 있으나 불편하고 기존 목록에 이어서 작성할 경우 1이 아닌 숫자로 시작하는 경우는 아직 미구현'
		}, {
			blockId  : 'BLOCK_0063',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- `/번호목록`도 마찬가지.'
		}, {
			blockId  : 'BLOCK_0064',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0065',
			parentId : null,
			noteId,
			blockType: 'h4',
			position : 1,
			content  : '#### Unordered-List'
		}, {
			blockId  : 'BLOCK_0066',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0067',
			parentId : null,
			noteId,
			blockType: 'emph',
			position : 1,
			content  : '> **기존의 마크다운 언어와 다름**'
		}, {
			blockId  : 'BLOCK_0068',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0069',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- `-`로 시작. (/-/g) `*`, `+`는 다른 기능으로 변경.'
		}, {
			blockId  : 'BLOCK_0070',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- `/unordered-list` 또는 `/목록`으로 작성할 수 있음.'
		}, {
			blockId  : 'BLOCK_0071',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0072',
			parentId : null,
			noteId,
			blockType: 'h4',
			position : 1,
			content  : '#### To-Do'
		}, {
			blockId  : 'BLOCK_0073',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0074',
			parentId : null,
			noteId,
			blockType: 'emph',
			position : 1,
			content  : '> **기존의 마크다운 언어와 다름**'
		}, {
			blockId  : 'BLOCK_0075',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0076',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- `[]`(빈칸없는 대괄호)로 시작. (/\[\]/g)'
		}, {
			blockId  : 'BLOCK_0077',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- `/todo-list` 또는 `/할일목록`으로 작성할 수 있음.'
		}, {
			blockId  : 'BLOCK_0078',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0079',
			parentId : null,
			noteId,
			blockType: 'h3',
			position : 1,
			content  : '### Accordion'
		}, {
			blockId  : 'BLOCK_0080',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0081',
			parentId : null,
			noteId,
			blockType: 'emph',
			position : 1,
			content  : '> **기존의 마크다운 언어와 다름**'
		}, {
			blockId  : 'BLOCK_0082',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0083',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- `+`로 시작하는 경우 접는 블럭을 만들 수 있음.'
		}, {
			blockId  : 'BLOCK_0084',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- 접는 영역은 들여쓰기 된 블럭으로 만듦.'
		}, {
			blockId  : 'BLOCK_0085',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- `/accordion` 또는 `/아코디언`으로 만들 수 있음.'
		}, {
			blockId  : 'BLOCK_0086',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0087',
			parentId : null,
			noteId,
			blockType: 'h3',
			position : 1,
			content  : '### 강조'
		}, {
			blockId  : 'BLOCK_0088',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0089',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '**기존의 마크다운 언어와 동일**'
		}, {
			blockId  : 'BLOCK_0090',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0091',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- `>`로 시작'
		}, {
			blockId  : 'BLOCK_0092',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- `/emphasize` 또는 `/강조`로 작성할 수 있음.'
		}, {
			blockId  : 'BLOCK_0093',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- GitHub이나 obsidian과 같은 스타일의 블럭을 생성하며, `>`의 개수만큼 중첩되어 표시한다.'
		}, {
			blockId  : 'BLOCK_0094',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0095',
			parentId : null,
			noteId,
			blockType: 'h3',
			position : 1,
			content  : '### 콜아웃'
		}, {
			blockId  : 'BLOCK_0096',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0097',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '**이모지와 함께 강조하기**'
		}, {
			blockId  : 'BLOCK_0098',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0099',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- `!>`로 시작'
		}, {
			blockId  : 'BLOCK_0100',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- `/call-out` 또는 `/콜아웃`으로 작성할 수 있음.'
		}, {
			blockId  : 'BLOCK_0101',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- 블럭의 좌측에 이모지를 추가하고 `강조`와 다르게 중첩할 수 없음.'
		}, {
			blockId  : 'BLOCK_0102',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0103',
			parentId : null,
			noteId,
			blockType: 'h3',
			position : 1,
			content  : '### 들여쓰기'
		}, {
			blockId  : 'BLOCK_0104',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0105',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '**기존의 마크다운 언어와 동일**'
		}, {
			blockId  : 'BLOCK_0106',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0107',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- TAB 키를 입력하여 들여쓰기 가능'
		}, {
			blockId  : 'BLOCK_0108',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- `/tab`과 `/들여쓰기` 기능이 있긴 한데, 이걸 누가 쓰려나'
		}, {
			blockId  : 'BLOCK_0109',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- 들여쓰기 가이드라인 표시 여부는 사용자 설정에 따라 다름.'
		}, {
			blockId  : 'BLOCK_0110',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0111',
			parentId : null,
			noteId,
			blockType: 'h3',
			position : 1,
			content  : '### 표'
		}, {
			blockId  : 'BLOCK_0112',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0113',
			parentId : null,
			noteId,
			blockType: 'emph',
			position : 1,
			content  : '> **기존 마크다운 언어와 다름**'
		}, {
			blockId  : 'BLOCK_0114',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0115',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- `||`로 시작'
		}, {
			blockId  : 'BLOCK_0116',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- `/table` 또는 `/표`로 작성할 수 있음.'
		}, {
			blockId  : 'BLOCK_0117',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- 표는 기본 2x2 크기로 시작하며 표의 우측 하단에 가로 세로 칸 수를 조절 가능한 숫자 입력 박스를 배치.'
		}, {
			blockId  : 'BLOCK_0118',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- 표의 우측 상단에는 작은 메뉴를 배치하여, 정렬이나 배경색 등을 정의할 수 있도록 함.'
		}, {
			blockId  : 'BLOCK_0119',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0120',
			parentId : null,
			noteId,
			blockType: 'h3',
			position : 1,
			content  : '### 구분선'
		}, {
			blockId  : 'BLOCK_0121',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0122',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '**기존의 마크다운 언어와 동일**'
		}, {
			blockId  : 'BLOCK_0123',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0124',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- `---`로 시작'
		}, {
			blockId  : 'BLOCK_0125',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- `/horizontal-line` 또는 `/구분선`으로 작성할 수 있음.'
		}, {
			blockId  : 'BLOCK_0126',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- 표시되는 구분선의 스타일은 사용자 설정에 따라 다름.'
		}, {
			blockId  : 'BLOCK_0127',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- 블럭의 높이는 다른 블럭의 절반 크기로 지정.'
		}, {
			blockId  : 'BLOCK_0128',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0129',
			parentId : null,
			noteId,
			blockType: 'h3',
			position : 1,
			content  : '### 코드블럭'
		}, {
			blockId  : 'BLOCK_0130',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0131',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '**기존 마크다운 언어와 동일**'
		}, {
			blockId  : 'BLOCK_0132',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0133',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- <code>```</code>로 시작'
		}, {
			blockId  : 'BLOCK_0134',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- `/code` 또는 `/코드`로 작성할 수 있음.'
		}, {
			blockId  : 'BLOCK_0135',
			parentId : null,
			noteId,
			blockType: 'ul',
			position : 1,
			content  : '- 블럭 생성 후 우측 상단에 작성할 언어를 선택할 수 있는 기능이 존재.'
		}, {
			blockId  : 'BLOCK_0136',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0137',
			parentId : null,
			noteId,
			blockType: 'h2',
			position : 1,
			content  : '## 텍스트 수정을 위한 인라인블럭'
		}, {
			blockId  : 'BLOCK_0138',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0139',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '블럭 식별자와 시작 인덱스(include), 종료 인덱스(exclude)를 복합 기본키로 지정. `[시작, 종료)`'
		}, {
			blockId  : 'BLOCK_0140',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0141',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : 'style 속성을 저장하는 칼럼 하나로 해결'
		}, {
			blockId  : 'BLOCK_0142',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0143',
			parentId : null,
			noteId,
			blockType: 'h2',
			position : 1,
			content  : '## 스타일'
		}, {
			blockId  : 'BLOCK_0144',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0145',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '기본 제공 블럭과 텍스트 스타일은 언제든 수정사항 반영이 가능하도록 DB에 TailwindCSS 클래스 명으로 칼럼 하나에 저장.'
		}, {
			blockId  : 'BLOCK_0146',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0147',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '테이블명 note_style'
		}, {
			blockId  : 'BLOCK_0148',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0149',
			parentId : null,
			noteId,
			blockType: 'h2',
			position : 1,
			content  : '## 노트 접근 권한'
		}, {
			blockId  : 'BLOCK_0150',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0151',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : '**암호 여부와는 별개**'
		}, {
			blockId  : 'BLOCK_0152',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}, {
			blockId  : 'BLOCK_0153',
			parentId : null,
			noteId,
			blockType: 'text',
			position : 1,
			content  : ''
		}]
	};
}
