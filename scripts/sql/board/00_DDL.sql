-- 요약노트 게시판 DDL

-- 폴더 테이블
CREATE TABLE IF NOT EXISTS folders
(
	folder_id VARCHAR(20)
		PRIMARY KEY,
	parent_folder VARCHAR(20),
	folder_nm VARCHAR(20),
	is_locked BOOLEAN NOT NULL DEFAULT FALSE,
	password VARCHAR(30),
	created_by VARCHAR(20) NOT NULL DEFAULT 'SYSTEM',
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_by VARCHAR(20) NOT NULL DEFAULT 'SYSTEM',
	updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE folders
	OWNER TO portfolio;

COMMENT ON TABLE folders IS '노트 폴더 테이블';
COMMENT ON COLUMN folders.folder_id IS '폴더 식별자';
COMMENT ON COLUMN folders.parent_folder IS '부모 폴더 식별자';
COMMENT ON COLUMN folders.folder_nm IS '폴더명';
COMMENT ON COLUMN folders.is_locked IS '폴더 잠금 여부';
COMMENT ON COLUMN folders.password IS '폴더 암호';
COMMENT ON COLUMN folders.created_by IS '생성자 아이디';
COMMENT ON COLUMN folders.created_at IS '생성일시';
COMMENT ON COLUMN folders.updated_by IS '수정자 아이디';
COMMENT ON COLUMN folders.updated_at IS '수정일시';

-- 사용자 노트 테이블
CREATE TABLE IF NOT EXISTS notes
(
	note_id VARCHAR(20)
		PRIMARY KEY,
	folder VARCHAR(20),
	title VARCHAR(100) NOT NULL,
	hashtags JSON NOT NULL DEFAULT '[]',
	created_by VARCHAR(20) NOT NULL DEFAULT 'SYSTEM',
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_by VARCHAR(20) NOT NULL DEFAULT 'SYSTEM',
	updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_notes_folder
		FOREIGN KEY (folder)
			REFERENCES folders
);

ALTER TABLE notes
	OWNER TO portfolio;

COMMENT ON TABLE notes IS '사용자 노트 테이블';
COMMENT ON COLUMN notes.note_id IS '사용자 노트 식별자';
COMMENT ON COLUMN notes.folder IS '노트 위치 폴더';
COMMENT ON COLUMN notes.title IS '노트 제목';
COMMENT ON COLUMN notes.hashtags IS '해시태그';

-- 사용자 노트 블럭 타입 테이블
CREATE TABLE IF NOT EXISTS note_block_types
(
	block_type VARCHAR(20)
		PRIMARY KEY,
	type_description TEXT,
	shortcut VARCHAR(20),
	auto_closing_id VARCHAR(20),
	command_en VARCHAR(20),
	command_kr VARCHAR(20),
	inline BOOLEAN NOT NULL DEFAULT FALSE
);

ALTER TABLE note_block_types
	OWNER TO portfolio;

COMMENT ON TABLE note_block_types IS '사용자 노트 블럭 타입 테이블';
COMMENT ON COLUMN note_block_types.block_type IS '노트 블럭 타입 식별자';
COMMENT ON COLUMN note_block_types.type_description IS '노트 블럭 타입 설명';
COMMENT ON COLUMN note_block_types.shortcut IS '단축키';
COMMENT ON COLUMN note_block_types.auto_closing_id IS '자동 닫기 식별자';
COMMENT ON COLUMN note_block_types.command_en IS '영문 명령어';
COMMENT ON COLUMN note_block_types.command_kr IS '한글 명령어';
COMMENT ON COLUMN note_block_types.inline IS '인라인 블럭 여부';

-- 사용자 노트 블럭 테이블
CREATE TABLE IF NOT EXISTS note_blocks
(
	block_id VARCHAR(20)
		PRIMARY KEY,
	parent_id VARCHAR(20),
	note_id VARCHAR(20),
	block_type VARCHAR(20),
	position SMALLINT NOT NULL DEFAULT 1,
	content TEXT,
	created_by VARCHAR(20) NOT NULL DEFAULT 'SYSTEM',
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_by VARCHAR(20) NOT NULL DEFAULT 'SYSTEM',
	updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_note_blocks_block_type
		FOREIGN KEY (block_type)
			REFERENCES note_block_types (block_type),
	CONSTRAINT fk_note_blocks_note_id
		FOREIGN KEY (note_id)
			REFERENCES notes (note_id)
);

ALTER TABLE note_blocks
	OWNER TO portfolio;

COMMENT ON TABLE note_blocks IS '노트 블럭 테이블';
COMMENT ON COLUMN note_blocks.block_id IS '블럭 식별자';
COMMENT ON COLUMN note_blocks.parent_id IS '부모 블럭 식별자';
COMMENT ON COLUMN note_blocks.note_id IS '노트 식별자';
COMMENT ON COLUMN note_blocks.block_type IS '노트 블럭 타입';
COMMENT ON COLUMN note_blocks.position IS '노트 블럭 줄 번호';
COMMENT ON COLUMN note_blocks.content IS '노트 블럭 내용';

-- 사용자 노트 블럭 속성 테이블
CREATE TABLE IF NOT EXISTS note_block_attrs
(
	block_id VARCHAR(20)
		PRIMARY KEY,
	sort VARCHAR(20) NOT NULL DEFAULT 'left',
	font VARCHAR(20) NOT NULL DEFAULT 'default',
	text_color VARCHAR(50) NOT NULL DEFAULT '--foreground',
	bg_color VARCHAR(50) NOT NULL DEFAULT '--foreground',
	link TEXT,
	CONSTRAINT fk_note_block_attrs_block_id
		FOREIGN KEY (block_id)
			REFERENCES note_blocks (block_id)
			ON DELETE CASCADE
);

ALTER TABLE note_block_attrs
	OWNER TO portfolio;

COMMENT ON TABLE note_block_attrs IS '사용자 노트 블럭 속성 테이블';
COMMENT ON COLUMN note_block_attrs.block_id IS '사용자 노트 블럭 식별자(PK, FK)';
COMMENT ON COLUMN note_block_attrs.sort IS '블럭정렬(left, right, center)';
COMMENT ON COLUMN note_block_attrs.font IS '폰트';
COMMENT ON COLUMN note_block_attrs.text_color IS '글꼴 색상';
COMMENT ON COLUMN note_block_attrs.bg_color IS '블럭 배경 색상';
COMMENT ON COLUMN note_block_attrs.link IS '링크';

-- 노트 편집모드
-- RW, R, W
CREATE TABLE IF NOT EXISTS note_modes
(
	code SMALLINT
		PRIMARY KEY,
	code_nm VARCHAR(15) NOT NULL,
	code_description TEXT,
	created_by VARCHAR(20) NOT NULL DEFAULT 'SYSTEM',
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_by VARCHAR(20) NOT NULL DEFAULT 'SYSTEM',
	updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE note_modes
	OWNER TO portfolio;

-- 노트 접근모드
-- 모두 가능, 조회만 가능, 수정 및 삭제 가능
CREATE TABLE IF NOT EXISTS note_access
(
	code SMALLINT
		PRIMARY KEY,
	code_nm VARCHAR(15) NOT NULL,
	code_description TEXT,
	created_by VARCHAR(20) NOT NULL DEFAULT 'SYSTEM',
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_by VARCHAR(20) NOT NULL DEFAULT 'SYSTEM',
	updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE note_access
	OWNER TO portfolio;

