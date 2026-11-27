-- 사용자 노트 Open Mode
INSERT INTO note_modes (code, code_nm)
VALUES (0, '보기'),
       (1, '편집'),
       (2, '편집 및 미리보기');

-- 최상위 폴더 하나만 추가
INSERT INTO folders (folder_id, folder_nm)
VALUES ('ROOT', '/');

-- 노트 블럭 타입 추가
-- notion, obsidian을 합친 노트가 될 수 있도록.
INSERT INTO note_block_types (block_type, type_description, shortcut, shortcut_sample, command_en, command_kr)
VALUES ('text', '일반 텍스트'),
       ('h1', '제목1', '#', '#', 'h1', '제목1'),
       ('h2', '제목2', '##', '##', 'h2', '제목2'),
       ('h3', '제목3', '###', '###', 'h3', '제목3'),
       ('h4', '제목4', '####', '####', 'h4', '제목4'),
       ('h5', '제목5', '#####', '#####', 'h5', '제목5'),
       ('h6', '제목6', '######', '######', 'h6', '제목6'),
       ('ol', '번호목록', '\d+\.', '1.', 'ordered-list', '번호목록'),
       ('ul', '목록', '\-', '-', 'unordered-list', '목록'),
       ('todo', '할일목록', '\[\]', '[]', 'todo-list', '할일목록'),
       ('acc', '아코디언', '\+', '+', 'accordion', '아코디언'),
       ('emph', '강조', '\>', '>', 'emphasize', '강조'),
       ('callout', '콜아웃', '!>', '!>', 'call-out', '콜아웃'),
       ('tab', '들여쓰기', '\t', 'tab', 'tab', '들여쓰기'),
       ('table', '표', '||', '||', 'table', '표'),
       ('hr', '구분선', '---', '---', 'horizontal-line', '구분선'),
       ('code', '코드 블럭', '```', '```', 'code', '코드');


