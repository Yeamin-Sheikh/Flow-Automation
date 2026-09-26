const localConfig = {
  "version": "1.0",
  "selectors": {
    "charactersTabButton": "mat-list-item:has(mat-icon:contains('accessibility_new'))",
    "charactersNameSelector": "flow-character-tile:has(img) span.character-tile-name",
    "createProjectButton": "button:has(mat-icon:contains(\"add_2\")):first(), button:has(mat-icon:contains(\"add\")):first()",
    "backProjectButton": "button:has(mat-icon:contains(\"arrow_back\"))",
    "selectAllItemMode": "flow-project-nav-list mat-list-item:has(mat-icon:contains(\"dashboard\"))",
    "configureUIModeButton": "button:has(mat-icon:contains(\"settings_2\"))",
    "selectGridModeOption": "flow-tile-view-settings flow-toggles:eq(0) button:eq(0)",
    "selectSizeGridModeOption": "flow-tile-view-settings flow-toggles:eq(1) button:eq(0)",
    "selectShowTextModeOption": "flow-tile-view-settings div.toggle-container:eq(2) mat-slide-toggle:has(button[aria-checked=\"false\"])",
    "selectClearPromptModeOption": "flow-tile-view-settings div.toggle-container:eq(3) mat-slide-toggle:has(button[aria-checked=\"false\"])",
    "closeConfigureUIModeButton": "button:has(mat-icon:contains(\"settings_2\"))",
    "configButton": "div.submit-controls button:has(mat-icon:contains(\"crop\")), div.submit-controls button:has(mat-icon:contains(\"tune\"))",
    "removeSelectedImagesButton": "flow-project-nav-list mat-list-item:has(mat-icon:contains(\"dashboard\"))",
    "disableAgentModeButton": "flow-agent-mode-toggle-chip.checked, flow-agent-panel button:has(mat-icon:contains(\"close\")), header button:has(mat-icon:contains(\"arrow_back\"))",
    "enableAgentModeButton": "flow-agent-mode-toggle-chip:not(.checked)",
    "neverAskAgentSettingButton": "flow-settings-view mat-radio-button:eq(1)",
    "saveAgentSettings": "flow-settings-view button:last()",
    "configButtonActived": "div.submit-controls button:has(mat-icon:contains(\"crop\")), div.submit-controls button:has(mat-icon:contains(\"tune\"))",
    "modelSelectButton": "flow-prompt-box-settings button:has(mat-icon:contains(\"arrow_drop_down\"))",
    "selectVideoMode": "flow-prompt-box-settings button:has(mat-icon:contains(\"videocam\"))",
    "selectImageMode": "flow-prompt-box-settings button:has(mat-icon:contains(\"image\"))",
    "textToVideoModeOption": "flow-prompt-box-settings button:has(mat-icon:contains(\"chrome_extension\"))",
    "imageToVideoModeOption": "flow-prompt-box-settings button:has(mat-icon:contains(\"crop_free\"))",
    "componentToVideoModeOption": "flow-prompt-box-settings button:has(mat-icon:contains(\"chrome_extension\"))",
    "aspectRatioTemplate": "flow-prompt-box-settings flow-toggles:has(span:contains(\"crop_\")) button:has(mat-icon:contains(\"{aspectRatio}\"))",
    "outputCountTemplate": "flow-prompt-box-settings flow-toggles:has(button:contains(\"x4\")) button:contains(\"{outputCount}\")",
    "modelTemplate": "flow-menu-item button:has(span:contains(\"{model}\"))",
    "videoLengthTemplate": "flow-prompt-box-settings flow-toggles:contains(\"8\") mat-button-toggle:contains(\"{videoLength}\")",
    "addImageButton": "flow-base-prompt-box button:has(mat-icon:contains(\"add\")), flow-ingredient-bar button.empty-chip:eq(0)",
    "promptTextarea": "div[role=\"textbox\"], flow-rich-text-editor",
    "submitButton": "div.submit-controls button:has(mat-icon:contains(\"arrow_forward\")), flow-generate-icon-button button:has(mat-icon:contains(\"arrow_forward\"))",
    "stopButton": "button:has(i:contains(\"stop_circle_should_not_have\"))",
    "uploadMediaButton": "button:has(mat-icon:contains(\"upload\")):last()",
    "selectUploadImageType": "flow-add-menu-popover-content mat-list-item mat-icon:contains(\"drive_folder_upload\")",
    "agreeTermUploadedVideoButton": "div.agree-actions-group button:eq(-1)",
    "selectUploadVideoType": "flow-add-menu-popover-content mat-list-item mat-icon:contains(\"drive_folder_upload\")",
    "selectUploadCharacterType": "flow-add-menu-popover-content mat-list-item mat-icon:contains(\"accessibility_new\")",
    "selectSpeakerType": "flow-add-menu-popover-content mat-list-item mat-icon:contains(\"voice_selection\")",
    "sortOptionsButton": "flow-add-menu-popover-content header mat-select:last()",
    "sortLatestOption": "div[popover=\"manual\"] mat-option:eq(0)",
    "virtuosoItemList": "flow-add-menu-popover-content flow-add-menu-asset-list div.cdk-virtual-scroll-content-wrapper > div",
    "firstFoundedItemSelector": "flow-add-menu-popover-content flow-add-menu-asset-list div.cdk-virtual-scroll-content-wrapper > div:has(img):first()",
    "searchUploadedImage": "flow-add-menu-popover-content input.search-input",
    "outputItems": "cdk-virtual-scroll-viewport div.virtual-item-container flow-grid-tile-container",
    "tileOnQueue": "flow-pending-tile",
    "tileOnGenerating": "flow-pending-tile div:contains(\"%\")",
    "tileByIdTemplate": "cdk-virtual-scroll-viewport div.virtual-item-container flow-grid-tile-container[data-tile-id=\"{tileId}\"]",
    "tileByIdTemplate2": "cdk-virtual-scroll-viewport div.virtual-item-container flow-grid-tile-container:eq(\"{tileId}\")",
    "tileEditLinkTemplate": "div[data-tile-id=\"{tileId}\"] a[href*=\"/edit/\"]",
    "moreOptionsButtonInHoverTile": "button:has(mat-icon:contains(\"more_vert\"))",
    "downloadButtonInHoverTile": "flow-menu-item mat-icon:contains(\"download\")",
    "quality2KOption": "button:has(span:contains(\"2K\"))",
    "quality1080Option": "button:has(span:contains(\"1080p\"))",
    "quality4KOption": "button:has(span:contains(\"4K\"))",
    "downloadDoneButton": "div.editor-buttons-group button:last()",
    "openProfileInfoButton": "flow-header-user-icon",
    "closeProfileInfoButton": "flow-account-panel button:has(mat-icon:contains(\"close\"))"
  }
};

function i(t, n) {
  return true;
}

async function g() {
  return localConfig;
}

async function a(t, e) {
  return localConfig;
}

export { a, g, i };
