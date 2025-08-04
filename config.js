// config.js - 설정 파일 (절대 Git에 업로드하지 마세요!)
const CONFIG = {
    ADMIN_PASSWORD: 'your-super-secret-password-2025',
    
    // 다른 설정들도 여기에 추가 가능
    AUTO_DELETE_HOURS: 24,
    MAX_FEEDBACK_LENGTH: 1000,
    FEEDBACK_STORAGE_KEY: 'focusGameFeedback_v1'
};

// 전역으로 접근 가능하게 설정
window.FOCUS_GAME_CONFIG = CONFIG;
