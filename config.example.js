// config.example.js - 예시 설정 파일
// 실제 사용 시: 이 파일을 복사해서 config.js로 이름 변경 후 값들을 수정하세요

const CONFIG = {
    // 관리자 비밀번호 - 강력한 비밀번호로 변경하세요!
    ADMIN_PASSWORD: 'CHANGE_THIS_PASSWORD',
    
    // 피드백 자동 삭제 시간 (시간 단위)
    AUTO_DELETE_HOURS: 24,
    
    // 피드백 최대 길이
    MAX_FEEDBACK_LENGTH: 1000,
    
    // localStorage 키
    FEEDBACK_STORAGE_KEY: 'focusGameFeedback_v1'
};

window.FOCUS_GAME_CONFIG = CONFIG;
