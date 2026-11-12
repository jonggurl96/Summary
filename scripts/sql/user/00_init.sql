-- 사용자테이블
-- SYSTEM, ADMIN, 기본계정_01, 테스트계정_01, guest_01
CREATE TABLE IF NOT EXISTS user_info
(
	user_id VARCHAR(20) NOT NULL PRIMARY KEY,
	name VARCHAR(20) NOT NULL,
	nickname VARCHAR(20),
	login_id VARCHAR(20) NOT NULL UNIQUE,
	login_pw VARCHAR(50) NOT NULL,
	email VARCHAR(20) UNIQUE,
	mobile VARCHAR(20) UNIQUE,
	birth_year SMALLINT,
	birth_month SMALLINT,
	birth_day SMALLINT,
	profile_img_url TEXT,
	gender SMALLINT NOT NULL DEFAULT 0,
	status SMALLINT NOT NULL DEFAULT 0,
	login_fail_count SMALLINT NOT NULL DEFAULT 0,
	last_login_at TIMESTAMPTZ
);

COMMENT ON TABLE user_info IS '사용자 정보';
COMMENT ON COLUMN user_info.user_id IS '사용자 고유 번호';
COMMENT ON COLUMN user_info.name IS '사용자명';
COMMENT ON COLUMN user_info.nickname IS '사용자별명';
COMMENT ON COLUMN user_info.login_id IS '로그인 아이디';
COMMENT ON COLUMN user_info.login_pw IS '로그인 패스워드';
COMMENT ON COLUMN user_info.email IS '사용자 이메일';
COMMENT ON COLUMN user_info.mobile IS '사용자 연락처';
COMMENT ON COLUMN user_info.birth_year IS '생년';
COMMENT ON COLUMN user_info.birth_month IS '생월';
COMMENT ON COLUMN user_info.birth_day IS '생일';
COMMENT ON COLUMN user_info.profile_img_url IS '프로필 사진 URL';
COMMENT ON COLUMN user_info.gender IS '성별코드';
COMMENT ON COLUMN user_info.status IS '사용자 상태 코드';
COMMENT ON COLUMN user_info.login_fail_count IS '로그인 실패 횟수';
COMMENT ON COLUMN user_info.last_login_at IS '마지막 로그인 일시';

-- 소셜 로그인 제공자
CREATE TABLE IF NOT EXISTS social_provider
(
	code VARCHAR(10) NOT NULL PRIMARY KEY,
	name VARCHAR(10) NOT NULL,
	login_txt VARCHAR(20),
	logo_url TEXT
);

COMMENT ON TABLE social_provider IS '소셜 로그인 제공자';
COMMENT ON COLUMN social_provider.code IS '소셜 로그인 제공자 코드';
COMMENT ON COLUMN social_provider.name IS '소셜 로그인 제공자명';
COMMENT ON COLUMN social_provider.login_txt IS '소셜 로그인 문구';
COMMENT ON COLUMN social_provider.logo_url IS '소셜 로그인 로고 이미지 URL';

-- 소셜 로그인(구글, 네이버, 카카오)
CREATE TABLE IF NOT EXISTS social_credential
(
	id VARCHAR(20) NOT NULL PRIMARY KEY,
	user_id VARCHAR(20) NOT NULL,
	provider VARCHAR(10) NOT NULL,
	provider_user_id VARCHAR(20) NOT NULL,
	provider_email VARCHAR(20),
	CONSTRAINT fk_social_credential_user_id
		FOREIGN KEY (user_id) REFERENCES user_info (user_id),
	CONSTRAINT fk_social_credential_provider
		FOREIGN KEY (provider) REFERENCES social_provider (code)
);

COMMENT ON TABLE social_credential IS '소셜 로그인(구글, 네이버, 카카오)';
COMMENT ON COLUMN social_credential.id IS '기본키';
COMMENT ON COLUMN social_credential.user_id IS '서비스 내부 회원 아이디';
COMMENT ON COLUMN social_credential.provider IS '서비스 제공자 코드';
COMMENT ON COLUMN social_credential.provider_user_id IS '제공자의 사용자 식별자';
COMMENT ON COLUMN social_credential.provider_email IS '제공자가 전달한 이메일';

-- 공통코드 테이블
CREATE TABLE IF NOT EXISTS cmmn_code
(
	code SMALLINT NOT NULL,
	parent_code SMALLINT,
	code_nm VARCHAR(20),
	use_yn BOOLEAN DEFAULT TRUE,
	del_yn BOOLEAN DEFAULT FALSE,
	created_by VARCHAR(20),
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_by VARCHAR(20),
	updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT pk_cmmn_code_comp_code_parent_code
		PRIMARY KEY (code, parent_code),
	CONSTRAINT fk_cmmn_code_created_by
		FOREIGN KEY (created_by) REFERENCES user_info (user_id),
	CONSTRAINT fk_cmmn_code_updated_by
		FOREIGN KEY (updated_by) REFERENCES user_info (user_id)
);

COMMENT ON TABLE cmmn_code IS '공통코드 테이블';
COMMENT ON COLUMN cmmn_code.code_nm IS '코드명';
COMMENT ON COLUMN cmmn_code.use_yn IS '사용여부';
COMMENT ON COLUMN cmmn_code.del_yn IS '삭제여부';
COMMENT ON COLUMN cmmn_code.created_by IS '생성자';
COMMENT ON COLUMN cmmn_code.created_at IS '생성일시';
COMMENT ON COLUMN cmmn_code.updated_by IS '수정자';
COMMENT ON COLUMN cmmn_code.updated_at IS '수정일시';

-- 역할테이블
CREATE TABLE IF NOT EXISTS roles
(
	role_id VARCHAR(20) NOT NULL PRIMARY KEY,
	parent_role VARCHAR(20),
	role_description TEXT NOT NULL,
	use_yn BOOLEAN DEFAULT TRUE,
	del_yn BOOLEAN DEFAULT FALSE,
	created_by VARCHAR(20),
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_by VARCHAR(20),
	updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_roles_created_by
		FOREIGN KEY (created_by) REFERENCES user_info (user_id),
	CONSTRAINT fk_roles_updated_by
		FOREIGN KEY (updated_by) REFERENCES user_info (user_id)
);

COMMENT ON TABLE roles IS '역할테이블';
COMMENT ON COLUMN roles.role_id IS '역할 식별자';
COMMENT ON COLUMN roles.parent_role IS '상위 식별자';
COMMENT ON COLUMN roles.role_description IS '역할 설명';
COMMENT ON COLUMN roles.use_yn IS '사용여부';
COMMENT ON COLUMN roles.del_yn IS '삭제여부';
COMMENT ON COLUMN roles.created_by IS '생성자';
COMMENT ON COLUMN roles.created_at IS '생성일시';
COMMENT ON COLUMN roles.updated_by IS '수정자';
COMMENT ON COLUMN roles.updated_at IS '수정일시';

-- 권한테이블
CREATE TABLE IF NOT EXISTS permissions
(
	prmsn_id VARCHAR(50) NOT NULL PRIMARY KEY,
	prmsn_description TEXT,
	use_yn BOOLEAN DEFAULT TRUE,
	del_yn BOOLEAN DEFAULT FALSE,
	created_by VARCHAR(20),
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_by VARCHAR(20),
	updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_permissions_created_by
		FOREIGN KEY (created_by) REFERENCES user_info (user_id),
	CONSTRAINT fk_permissions_updated_by
		FOREIGN KEY (updated_by) REFERENCES user_info (user_id)
);

COMMENT ON TABLE permissions IS '권한테이블';
COMMENT ON COLUMN permissions.prmsn_id IS '[서비스도메인:]리소스:행위[:범위]';
COMMENT ON COLUMN permissions.prmsn_description IS '권한 설명';
COMMENT ON COLUMN permissions.use_yn IS '사용여부';
COMMENT ON COLUMN permissions.del_yn IS '삭제여부';
COMMENT ON COLUMN permissions.created_by IS '생성자';
COMMENT ON COLUMN permissions.created_at IS '생성일시';
COMMENT ON COLUMN permissions.updated_by IS '수정자';
COMMENT ON COLUMN permissions.updated_at IS '수정일시';

-- 사용자역할 테이블
CREATE TABLE IF NOT EXISTS user_roles
(
	user_id VARCHAR(20) NOT NULL,
	role_id VARCHAR(20) NOT NULL,
	CONSTRAINT pk_user_roles_comp_user_id_role_id
		PRIMARY KEY (user_id, role_id),
	CONSTRAINT fk_user_roles_user_id
		FOREIGN KEY (user_id) REFERENCES user_info (user_id),
	CONSTRAINT fk_user_roles_role_id
		FOREIGN KEY (role_id) REFERENCES roles (role_id)
);

-- 역할권한 테이블
CREATE TABLE IF NOT EXISTS role_permissions
(
	role_id VARCHAR(20) NOT NULL,
	prmsn_id VARCHAR(50) NOT NULL,
	CONSTRAINT pk_role_permissions_comp_role_id_prmsn_id
		PRIMARY KEY (role_id, prmsn_id),
	CONSTRAINT fk_role_permissions_role_id
		FOREIGN KEY (role_id) REFERENCES roles (role_id),
	CONSTRAINT fk_role_permissions_prmsn_id
		FOREIGN KEY (prmsn_id) REFERENCES permissions (prmsn_id)
);
