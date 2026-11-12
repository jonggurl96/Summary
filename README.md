# Summary Notes.

공부한 내용 정리 및 실습 프로젝트.

MSA 기반 서비스 개발

<img src="https://img.shields.io/badge/Spring Boot v4.1.2-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white" alt="Spring Boot v4.1.2">
<img src="https://img.shields.io/badge/Oracle OpenJDK 27-B07219?style=for-the-badge" alt="Oracle OpenJDK 27">
<img src="https://img.shields.io/badge/PostgreSQL 18-4169E1?style=for-the-badge&logo=PostgreSQL&logoColor=white" alt="PostgreSQL 18">
<img src="https://img.shields.io/badge/Node.js LTS v26.13.1-5FA04E?style=for-the-badge&logo=Node.js&logoColor=white" alt="Node.js LTS v26.13.1">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" alt="React">
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white" alt="Next.js">
<img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white" alt="jenkins">
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white" alt="Docker">
<img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=Kubernetes&logoColor=white" alt="Kubernetes">
<img src="https://img.shields.io/badge/NginX-009639?style=for-the-badge&logo=NginX&logoColor=white" alt="NginX">

포트폴리오 몇 년간 천천히 만든다는 마음으로 만들기 시작.

전체 시스템은 MSA 시스템. DB는 PostgreSQL, 프록시로 NginX를 사용하며 End-to-End SSL/TLS 암호화 적용

공부하면서 예상 면접 질문들은 또 따로 정리해서 답안까지 작성할 예정.

대략적인 기능은 아래와 같음.

### Markdown 편집기

- 공부하면서 요약 정리
- 예상 질문과 답변 정리
- Obsidian과 Notion을 참고하여 생성
- 폴더 구조 만들어서 관리

- [ ] 추후 스타일 적용도 추가 예정

### Nginx 리버스 프록시

- API Gateway IP를 숨김
- End-to-End SSL/TLS 암호화 적용
- 도메인 별 서비스 그룹 관리. 하나의 서비스를 2개 이상의 서비스 그룹에 포함시킬 수 있음.

### MediaMTX + WebRTC

- 동영상 스트리밍 관리(공공데이터포털 실시간 교통정보 url)

### JWT토큰 인증

- accessToken과 refreshToken을 사용하여 인증
- 로그인 시 (refreshToken, accessToken)을 Redis에 저장
- 재발급 시 새로운 (refreshToken, accessToken)을 Redis에 저장

### 안드로이드 네이티브 앱 개발

- React Native를 사용하여 안드로이드 앱으로 개발 후 모바일 카메라 앱을 연동하여 다양한 기능 추가

### CI/CD

- GitHub Actions를 사용하여 자동 배포 및 테스트
- Docker Compose를 사용하여 로컬 개발 환경 구축
- Kubernetes를 사용하여 클라우드 배포 및 관리
- Jenkins를 사용하여 자동화된 빌드 및 배포

### Monitoring

- PLG 스택을 사용하여 시스템 모니터링 및 분석

### Weather

- 날씨정보 API 연계하여 React(JS) SPA 연동.

### Next.js

- 마크다운 편집기 페이지는 타입스크립트로 개발한 Next.js 앱에서 개발
- 페이지 정보, 로그인 정보 등은 PostgreSQL에 저장.
- 사용자 별 폴더 구조 상이

## 반드시 만들어야 할 문서

- **시스템 아키텍처 문서**: API Gateway, 인증, DB, 영상 서비스 사이의 데이터 흐름과 기술 선택 이유

- **장애 분석 보고서**: 실제 발생한 장애 재현 조건, 원인, 해결책, 검증 결과

- **성능 개선 보고서**: API 응답시간 p95, 처리량, DB 쿼리 성능의 개선 전후 비교

- **CI/CD 구성**: 자동 테스트, 빌드, 배포, 실패 시 롤백 절차

- **경력기술서**: 프로젝트별 담당 역할, 기술적 기여, 정량 성과


