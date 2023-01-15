package com.example.black;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.webkit.WebView;

import com.example.black.bean.WebViewProxy;
import com.example.black.service.MyFrame;

public class MainActivity extends AppCompatActivity{
    public final boolean isDebuging = true;
    private WebView webView;

    public WebView getWebView() {
        return webView;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        bindComponent();//程序运行初始化绑定组件
        new MyFrame(new WebViewProxy(webView,null,null),MainActivity.this).run();//静态代理传参
        if (isDebuging) {
            // TODO: 2023/1/15 测试方法,记得删
            test();
        }
    }

    private void test() {
        webView.loadUrl("file:///data/data/com.example.black/files/test/Untitled-1.html");
        webView.loadUrl("javascript:alert(aa)");
    }

    //    绑定组件
    private void bindComponent() {
        this.webView = findViewById(R.id.webView);

    }
}