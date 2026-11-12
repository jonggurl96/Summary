-- ==================================================== --
-- UserService에서 사용하는 DB USERSERVICE 초기 데이터 세팅
-- ==================================================== --

-- 사용자 정보 (시스템 / 관리자 / 게스트)
INSERT INTO user_info (user_id, name, login_id, login_pw)
VALUES ('SYSTEM', 'SYSTEM', 'system', 'system'),
       ('ADMIN01', '최초관리자', 'admin01', 'admin01'),
       ('guest', 'guest', 'guest', 'guest');

-- 사용자 정보 (사용자 / 테스트)
INSERT INTO user_info (user_id, name, nickname, login_id, login_pw, email, mobile, birth_year, birth_month, birth_day, profile_img_url, gender, status, login_fail_count, last_login_at)
VALUES (
	       'USER_01', '이종걸', '포폴작성자', 'jongg', 'jongg', 'jonggurl96@naver.com', '010-8138-9718', 1996, 5, 10, '/profiles/face-404.png', 1, 0, 0, NULL
       ),
       (
	       'TEST_01', '홍길동', '테스트계정_01', 'test', 'test', NULL, NULL, NULL, NULL, NULL, '/profile/default/face-404.png', 1, 0, 0, NULL
       );

-- 소셜 로그인 서비스 제공자
INSERT INTO social_provider (code, name, login_txt, logo_url)
VALUES ('GOOGLE', '구글', 'Sign up with Google', '/sodial/login/logo/'),
       ('NAVER', '네이버', '네이버 아이디로 로그인', '/sodial/login/logo/'),
       ('KAKAO', '카카오', '카카오계정으로 로그인', '/sodial/login/logo/');

-- 공통코드
INSERT INTO cmmn_code (code, parent_code, code_nm, created_by, updated_by)
VALUES (0, -1, '성별', 'SYSTEM', 'SYSTEM'),
       (0, 0, '미정', 'SYSTEM', 'SYSTEM'),
       (1, 0, '남성', 'SYSTEM', 'SYSTEM'),
       (2, 0, '여성', 'SYSTEM', 'SYSTEM'),
       (1, -1, '계정상태', 'SYSTEM', 'SYSTEM'),
       (0, 1, '활성계정', 'SYSTEM', 'SYSTEM'),
       (1, 1, '휴면계정', 'SYSTEM', 'SYSTEM'),
       (2, 1, '삭제된 계정', 'SYSTEM', 'SYSTEM');

-- 역할테이블
INSERT INTO roles (role_id, parent_role, role_description, created_by, updated_by)
VALUES ('ROLE_ADMIN', NULL, '관리자권한', 'SYSTEM', 'SYSTEM'),
       ('ROLE_GUEST', NULL, '게스트권한', 'SYSTEM', 'SYSTEM'),
       ('ROLE_USER', NULL, '일반사용자권한', 'SYSTEM', 'SYSTEM'),
       ('ROLE_TEST', NULL, '테스트권한', 'SYSTEM', 'SYSTEM');

-- 사용자역할 테이블
INSERT INTO user_roles (user_id, role_id)
VALUES ('ADMIN01', 'ROLE_ADMIN'),
       ('ADMIN01', 'ROLE_GUEST'),
       ('ADMIN01', 'ROLE_USER'),
       ('guest', 'ROLE_GUEST'),
       ('USER_01', 'ROLE_GUEST'),
       ('USER_01', 'ROLE_USER'),
       ('TEST_01', 'ROLE_GUEST'),
       ('TEST_01', 'ROLE_USER'),
       ('TEST_01', 'ROLE_TEST');

-- 권한 테이블
INSERT INTO permissions (prmsn_id, prmsn_description, created_by, updated_by)
VALUES ('profile:read:self', '내 정보 조회', 'SYSTEM', 'SYSTEM'),
       ('profile:update:self', '내 정보 수정', 'SYSTEM', 'SYSTEM'),
       ('password:change:self', '내 비밀번호 변경', 'SYSTEM', 'SYSTEM'),
       ('password:init:self', '내 비밀번호 초기화', 'SYSTEM', 'SYSTEM'),
       ('session:read:self', '내 로그인 세션 조회', 'SYSTEM', 'SYSTEM'),
       ('session:revoke:self', '로그아웃', 'SYSTEM', 'SYSTEM'),
       ('session:revoke:any', '다른 사용자의 세션 강제 종료', 'SYSTEM', 'SYSTEM'),
       ('account:delete:self', '계정 탈퇴', 'SYSTEM', 'SYSTEM'),
       ('user:read:any', '사용자 목록•상세 조회', 'SYSTEM', 'SYSTEM'),
       ('user:status:update', '사용자 계정 정지•해제', 'SYSTEM', 'SYSTEM'),
       ('user:role:update', '사용자 역할 변경', 'SYSTEM', 'SYSTEM'),
       ('audit:read', '인증•권한 변경 이력 조회', 'SYSTEM', 'SYSTEM'),
       ('test-data:create', '테스트 데이터 생성', 'SYSTEM', 'SYSTEM'),
       ('test-data:read', '테스트 데이터 조회', 'SYSTEM', 'SYSTEM'),
       ('test-data:update', '테스트 데이터 수정', 'SYSTEM', 'SYSTEM'),
       ('test-data:delete', '테스트 데이터 삭제', 'SYSTEM', 'SYSTEM');

-- 역할권한 테이블
INSERT INTO role_permissions (role_id, prmsn_id)
VALUES ('ROLE_ADMIN', 'session:revoke:any'),
       ('ROLE_ADMIN', 'user:read:any'),
       ('ROLE_ADMIN', 'user:status:update'),
       ('ROLE_ADMIN', 'user:role:update'),
       ('ROLE_ADMIN', 'audit:read'),
       ('ROLE_ADMIN', 'test-data:read'),
       ('ROLE_GUEST', 'password:init:self'),
       ('ROLE_USER', 'profile:read:self'),
       ('ROLE_USER', 'profile:update:self'),
       ('ROLE_USER', 'password:change:self'),
       ('ROLE_USER', 'session:read:self'),
       ('ROLE_USER', 'session:revoke:self'),
       ('ROLE_USER', 'account:delete:self'),
       ('ROLE_TEST', 'test-data:create'),
       ('ROLE_TEST', 'test-data:read'),
       ('ROLE_TEST', 'test-data:update'),
       ('ROLE_TEST', 'test-data:delete');


