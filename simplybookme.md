
Create new React component:
import React, { useEffect, useRef } from 'react';

function BookingWidget() {
    const widgetContainerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = "//widget.simplybook.asia/v2/widget/widget.js";
        script.onload = () => {
            new SimplybookWidget({"widget_type":"iframe","url":"https:\/\/zeronail0228.simplybook.asia","theme":"default","theme_settings":{"timeline_hide_unavailable":"1","hide_past_days":"0","timeline_show_end_time":"0","timeline_modern_display":"as_slots","sb_base_color":"#216849","display_item_mode":"block","booking_nav_bg_color":"#216849","body_bg_color":"#f7f7f7","sb_review_image":"","dark_font_color":"#333333","light_font_color":"#ffffff","btn_color_1":"#6b9080","sb_company_label_color":"#ffffff","hide_img_mode":"1","show_sidebar":"1","sb_busy":"#c7b3b3","sb_available":"#d6ebff"},"timeline":"modern","datepicker":"top_calendar","is_rtl":false,"app_config":{"clear_session":0,"allow_switch_to_ada":0,"predefined":[]},"container_id":"sbw_trlbfj"});
        };
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
       <div id="sbw_trlbfj" ref={widgetContainerRef}></div>
    );
}

export default BookingWidget;


將代碼添加到網頁上以在您現有的網站上提供服務預約。:
<script src="//widget.simplybook.asia/v2/widget/widget.js" type="text/javascript"></script>
<script type="text/javascript">
    var widget = new SimplybookWidget({"widget_type":"iframe","url":"https:\/\/zeronail0228.simplybook.asia","theme":"default","theme_settings":{"timeline_hide_unavailable":"1","hide_past_days":"0","timeline_show_end_time":"0","timeline_modern_display":"as_slots","sb_base_color":"#216849","display_item_mode":"block","booking_nav_bg_color":"#216849","body_bg_color":"#f7f7f7","sb_review_image":"","dark_font_color":"#333333","light_font_color":"#ffffff","btn_color_1":"#6b9080","sb_company_label_color":"#ffffff","hide_img_mode":"1","show_sidebar":"1","sb_busy":"#c7b3b3","sb_available":"#d6ebff"},"timeline":"modern","datepicker":"top_calendar","is_rtl":false,"app_config":{"clear_session":0,"allow_switch_to_ada":0,"predefined":[]}});
</script>