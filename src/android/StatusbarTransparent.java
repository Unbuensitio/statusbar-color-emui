package net.unbuensitio.statusbar.color.emui;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.apache.cordova.CordovaArgs;
import org.json.JSONException;

import android.os.Build.VERSION;
import android.os.Build.VERSION_CODES;
import android.graphics.Color;
import android.view.Window;
import android.view.WindowManager.LayoutParams;
import android.view.WindowManager;

public class StatusbarTransparent extends CordovaPlugin {

	@Override
	public boolean execute(String action, final CordovaArgs args, CallbackContext callback) throws JSONException {
		// grab the correct methods
		if(action.equalsIgnoreCase("enable")) {
			if(VERSION.SDK_INT >= VERSION_CODES.KITKAT) {
				cordova.getActivity().runOnUiThread( new Runnable() {
					public void run() {
						//cordova.getActivity().getWindow().addFlags(LayoutParams.FLAG_TRANSLUCENT_STATUS);
						/*int color = Color.parseColor(preferences.getString("StatusBarBackgroundColor", "#4CAF50"));
						Window window = cordova.getActivity().getWindow();
						window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
						window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
						window.setStatusBarColor(color);*/
						Window window = cordova.getActivity().getWindow();
						window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
						window.setStatusBarColor(Color.parseColor("#0093DE"));
					}
				});
				callback.success();
			} else {
				callback.error("not supported");
			}
			return true;
		} else if(action.equalsIgnoreCase("color")) {
			if(VERSION.SDK_INT >= VERSION_CODES.KITKAT) {
				cordova.getActivity().runOnUiThread( new Runnable() {
					public void run() {
						Window window = cordova.getActivity().getWindow();
						window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
						window.setStatusBarColor(Color.parseColor(args.getString(0)));
					}
				});
				callback.success();
			} else {
				callback.error("not supported");
			}
			return true;
		} else if(action.equalsIgnoreCase("disable")) {
			if(VERSION.SDK_INT >= VERSION_CODES.KITKAT) {
				cordova.getActivity().runOnUiThread( new Runnable() {
					public void run() {
						cordova.getActivity().getWindow().clearFlags(LayoutParams.FLAG_TRANSLUCENT_STATUS);
					}
				});
				callback.success();
			} else {
				callback.error("not supported");
			}
			return true;
		} else {
			callback.error("Unknown Action: " + action);
			return false;
		}
	}
}
